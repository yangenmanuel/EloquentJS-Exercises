/*
 Iterable groups
Make the Group class from the previous exercise iterable. Refer to the section
 about the iterator interface earlier in the chapter if you aren’t clear on the 
 exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator 
created by calling the Symbol.iterator method on the array. That would work, but it 
defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  constructor() {
    this.group = [];
  }

  add(item) {
    if (!this.group.includes(item)) {
      this.group.push(item);
    }
  }

  static from(a) {
    const g = new Group();
    for (const item of a) {
      g.add(item);
    }
    return g;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  };
}

class GroupIterator {
  constructor(Group){
    this.group = Group.group
    this.i = 0
  }
  
  next() {
    if (this.i === this.group.length) return { done: true }
    
    const value = this.group[this.i]
    this.i++
    return { value, done: false }
  }
}

for (const value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
