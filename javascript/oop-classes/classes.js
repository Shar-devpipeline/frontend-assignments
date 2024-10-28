class manageArray {
  constructor(array) {
    this.array = array;
    this.count = 0;
  }

  // splice(start, deleteCount, ...items) {
  //   return this.array.splice(start, deleteCount, ...items);
  // }

  pop() {
    if (this.array.length === 0) {
      return "This array is empty";
    }

    let i;
    if (this.count % 2 === 0) {
      i = this.array.shift();
    } else {
      i = this.array.pop();
    }

    this.count++;
    return i;
  }
}

const managedArray = new manageArray([1, 2, 3, 4, 5]);

console.log(managedArray.pop());
console.log(managedArray.pop());
console.log(managedArray.pop());
console.log(managedArray.pop());
console.log(managedArray.pop());
console.log(managedArray.pop());
console.log(managedArray.pop());
