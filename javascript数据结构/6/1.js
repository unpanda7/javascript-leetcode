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
  insert(el, position) {

  };
  getElementAt(index) {
    
  };
  remove(element) {

  };
  indexOf(element) {
    
  };
  removeAt(position) {

  };
  isEmpty() {

  };
  size() {

  };
  toString() {

  };
}
