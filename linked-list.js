/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    const popped = this.tail;
    console.log(this.tail.val);
    if (popped === null) {
      throw new Error("The list is empty");
    }
    let curr = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    }

    while (curr !== null) {
      if (curr.next === popped) {
        this.tail = curr;
        curr.next = null;
        this.length--;
        return popped.val;
      }
      curr = curr.next;
    }
    return popped.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const first = this.head;
    if (this.length === 0) {
      throw new Error("The list is empty");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return first.val;
    } else {
      this.head = this.head.next;
      this.length--;
      return first.val;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length < idx) {
      throw new Error("The index is invalid");
    }
    let counter = 0;
    let curr = this.head;
    while (counter < idx) {
      curr = curr.next;
      counter++;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) {
      throw new Error("The index is invalid");
    }
    let counter = 0;
    let curr = this.head;
    while (counter <= idx) {
      if (counter === idx) {
        curr.val = val;
        return;
      }
      curr = curr.next;
      counter++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length + 1) {
      throw new Error("The index is invalid");
    }
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    let counter = 0;
    let curr = this.head;
    while (counter <= idx) {
      if (counter === idx - 1) {
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;
        if (this.tail.val === curr.val) {
          this.tail = newNode;
        }
        return;
      }
      curr = curr.next;
      counter++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length) {
      throw new Error("The index is invalid");
    }
    let counter = 0;
    let prev = new Node(null);
    let curr = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return curr;
    }
    while (counter <= idx) {
      if (counter === idx) {
        prev.next = curr.next;
        this.length--;
        if (this.tail.val === curr.val) {
          this.tail = prev;
        }
        return curr.val;
      }
      prev = curr;
      curr = curr.next;
      counter++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let counter = 0;
    if (this.length === 0) {
      return 0
    }
    let curr = this.head;
    while (counter < this.length) {
      total += curr.val;
      curr = curr.next;
      counter++;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
