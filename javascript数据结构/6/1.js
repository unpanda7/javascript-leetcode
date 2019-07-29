import { defaultEquals } from './util';
import { Node } from './model/linked-list-models';
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // 不是必须
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  push(el) {
    // 先new 一个 Node
    const node = new Node(el);
    let current;
    if(this.head === null) { // 这一步有必要吗？
      this.head = node;
    } else {
      current = this.head;
      while(current.next != null) {
        current = current.next; // 获得最后一项
      }
      // 将其next赋为新元素，建立连接
      current.next = node;
    }
    this.count++;
  };
  insert(element, index) {
    if (index >=0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) { // 在第一个位置添加
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  };
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined  
  };
  remove(index) {
    if(index >= 0 && index < this.count) {
      let current = this.head; // 从第一项开始找

      if (index === 0) {
        this.head = current.next; // 这里好像没有释放current节点？current 就是head...不需要释放
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--;
      return current.element;
    }
    return undefined
  };
  indexOf(element) {
    let current = this.head;
    for(let i = 0; i <　this.count && this.current !=null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  };
  removeAt(position) {

  };
  isEmpty() {
    return this.size === 0;
  };
  size() {
    return this.count;
  };
  getHead() {
    return this.head
  }
  toString() {
    if (this.head === null)  {
      return ''
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for(let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  };
  pushTest(el) {
    const node = new Node(el);
    let current;
    if(head === null) {
      this.head = node
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
}
