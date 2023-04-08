/*
  Dominant writing direction
Write a function that computes the dominant writing direction in a string of text.
Remember that each script object has a direction property that can be 'ltr'
(left to right), 'rtl' (right to left), or 'ttb' (top to bottom).

The dominant direction is the direction of a majority of the characters that have a
script associated with them. The characterScript and countBy functions defined earlier
in the chapter are probably useful here.
*/

import { readFileSync } from 'fs'
const SCRIPTS = JSON.parse(readFileSync('./scripts.json'))

function characterScript (code) {
  for (const script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script
    }
  }
  return null
}

function countBy (items, groupName) {
  const counts = []
  for (const item of items) {
    const name = groupName(item)
    const known = counts.findIndex(c => c.name === name)
    if (known === -1) {
      counts.push({ name, count: 1 })
    } else {
      counts[known].count++
    }
  }
  return counts
}

function dominantDirection (text) {
  const scripts = countBy(text, char => {
    const script = characterScript(char.codePointAt(0))
    return script ? script.direction : 'none'
  }).filter(({ name }) => name !== 'none')
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found'
    case 1:
      return scripts[0].name
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found'
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name)
      }
  }
}

console.log(dominantDirection('Hello!'))
// → ltr
console.log(dominantDirection('Hey, مساء الخير'))
// → rtl
console.log(dominantDirection(''))
// → no dominant direction found
console.log(dominantDirection('Heyخير'))
// → no dominant direction found
