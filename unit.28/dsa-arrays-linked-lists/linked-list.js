/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let cur = this.head;
    let count = 0;

    while (cur !== null && count !== idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  
  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }
    newNode.next = this.head
    this.head = newNode

  }

  /** pop(): return & remove last item. */

  pop() {
  if(!this.head){
    console.error('no nodes')
    return null;
  }
  let curretnNode = this.head;
  while (curretnNode.next !== this.tail){
    curretnNode = curretnNode.next;
  }
  const lastItem = this.tail;
  this.tail = curretnNode;
  this.tail.next = null;

  return lastItem
  }

  /** shift(): return & remove first item. */

  shift() {
  if(!this.head){
    console.error('no nodes')
    return null;
  }

  if (this.head === this.tail) {
    const firstItem = this.head;
    this.head = null;
    this.tail = null;
    return firstItem;
  }

  // Update the head and return the first item
  const firstItem = this.head;
  this.head = this.head.next;
  firstItem.next = null;

  return firstItem;
}
  

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    const node = this._get(idx);
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const node = this._get(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
    throw new Error("Invalid index.");
}

  if (idx === 0) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  if (this.length === 0) this.tail = newNode;
  this.length += 1;
  return;
}

  const prevNode = this._get(idx - 1);
  const newNode = new Node(val);
  newNode.next = prevNode.next;
  prevNode.next = newNode;
  if (idx === this.length) this.tail = newNode;
  this.length += 1;
}


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) {
      const val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length === 0) this.tail = null;
      return val;
    }

    const prevNode = this._get(idx - 1);
    const val = prevNode.next.val;
    prevNode.next = prevNode.next.next;

    if (idx === this.length - 1) this.tail = prevNode;

    this.length -= 1;
    return val;
  }
  /** average(): return an average of all values in the list */
  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}


module.exports = LinkedList;
