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
  inputValue(node){
    const height1 = node.left ? node.left.getHeight() : 0;
    const height2 = node.right ? node.right.getHeight() : 0;
    if(height1 === 0 && height2 === 0){
      node.value = null
      return
    }
    if(height1 === 0){
      node.value = node.right.value
      node.right = node.right.right
      return
    }
    if(height1){
      const height3 = node.left.right ? node.left.right.getHeight() : 0;
      let last = node.left
      let lastPrev = null
      for(let i = 0; i < height3; i++){
        lastPrev = last
        last = last.right
        if(!last.right) break
      }
      node.value = last.value
      node.left = lastPrev ? lastPrev : null
      return 
    }
  }
  delete(deleteValue){
    //왼쪽에서 제일 큰값 가져오기
    if(this.value === null){
      return
    }

    if(this.value === deleteValue){
      this.inputValue(this)
    }

    const child = deleteValue < this.value ? "left" : 'right' 
    if(this[child].value !== deleteValue){
      this[child].delete(deleteValue)
    }
    if(this[child].value === deleteValue){
      this.inputValue(this[child])
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

  // node.delete(9)
})

test('delete',()=>{
  let node = new Node();
  node.insert(13);
  node.insert(9);
  node.insert(15);
  node.insert(8);
  node.insert(11);
  node.insert(12);
  console.log(node)

  node.delete(9)
  node.delete(12)

  // expect(node.delete(5)).toBe(null)
  console.log(node)
})