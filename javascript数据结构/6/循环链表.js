class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}

function defaultEquals(a, b) {
  return a === b
}

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
    this.count = 0
    this.head = undefined
  }
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      // catches null && undefined
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count
  }
  getHead() {
    return this.head
  }
  clear() {
    this.head = undefined
    this.count = 0
  }
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      // console.log(objString);

      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
  toStringTest() {
    if (this.head === null) return ''

    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null; i++) {
      // objString = `${objString}, ${current.element}`
      objString += `,${current.element}`
      current = current.next
    }
    return objString
  }
}

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        // 第一
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node // 更新head
        }
      } else if (index === this.count) {
        // 最后
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node // 更新tail
      } else {
        // 不用更新 head 和 tail
        const previous = this.getElementAt(index - 1) //
        current = previous.next
        node.next = current
        previous.next = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }
  remove(index) {
    if (index >= 0 && index < this.count) {
      this.head = current.next
      if (index === 0) {
        if (this.count === 1) {
          // 只有一项
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }
}
