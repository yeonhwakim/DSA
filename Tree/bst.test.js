class Node {
  constructor(value = null) {
    this.value = value;
  }

  getHeight(){
    if (!this.value) {
      return 0;
    }

    const height1 = this.left ? this.left.getHeight() : 0;
    const height2 = this.right ? this.right.getHeight() : 0;

    return 1 + Math.max(height1, height2);
  }

  insert(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }
    const child = value < this.value ? 'left' : 'right';
    if (this[child]) {
      this[child].insert(value);
      return;
    }
    this[child] = new Node(value);
  }

  delete(deleteValue){
    if(this.value === null){
      return
    }
    if(this.value === deleteValue){
      this.value = deleteValue
    }
  }
}

test('insert',()=>{
  // 노드가 하나라도 있으면 heigth가 았다 0 > 1
  let node = new Node();

  expect(node.getHeight()).toBe(0);

  node.insert(7);

  expect(node.getHeight()).toBe(1);

  node.insert(3);

  expect(node.getHeight()).toBe(2);

  node.insert(5);

  expect(node.getHeight()).toBe(3);

  node.insert(10);

  expect(node.getHeight()).toBe(3);

  node.insert(6);

  expect(node.getHeight()).toBe(4);
})

