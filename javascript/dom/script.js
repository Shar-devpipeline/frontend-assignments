// CHALLENGE 1

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }

  appendNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  getFirstNode() {
    return this.head;
  }

  getLastNode() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  popLastNode() {
    if (!this.head.next) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }

    const poppedNode = current.next;
    current.next = null;
    return poppedNode;
  }

  clearAllNodes() {
    this.head = null;
  }

  display() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkList();
list.appendNode(10);
list.appendNode(11);
list.appendNode(12);

console.log("Linked List:");
list.display();

const firstNode = list.getFirstNode();
console.log(`First node: ${firstNode ? firstNode.value : "None"}`);

const lastNode = list.getLastNode();
console.log(`Last node: ${lastNode ? lastNode.value : "None"}`);

const poppedNode = list.popLastNode();
console.log(`Popped node: ${poppedNode ? poppedNode.value : "None"}`);

console.log("List after popping the last node:");
list.display();

list.clearAllNodes();
console.log("List after clearing all nodes:");
list.display();

// CHALLENGE 2

console.log(document.querySelectorAll("p"));

const allElements = document.querySelectorAll("p");
allElements.forEach((element) => {
  console.log(element);
});

// CHALLENGE 3

document.querySelectorAll("#column").forEach((cell, index) => {
  const colors = ["#0388fc", "#0056a1", "#6fb8f7"];

  cell.textContent = colors[index];
});
