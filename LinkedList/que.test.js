function Queue() {
  this.enqueStack = new Stack();
  this.dequeStack = new Stack();

  this.enque = (input) => {
    this.enqueStack.push(input);
  };

  this.deque = () => {
    if(this.dequeStack.isEmpty()) {
      this.dequeStack.tail = this.enqueStack.head;
      this.dequeStack.head = this.enqueStack.tail;
    }

    return this.dequeStack.pop();
  }
}

function Stack() {
  this.head;
  this.tail;

  this.push = (input) => {
    const newNode = {
      value: input,
      next: '',
      prev: this.tail
    };
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } 
    if (this.tail) {
      if(this.haed === this.tail){
        this.head.next = newNode;
      }
      this.tail.next = newNode;
    }

    this.tail = newNode;
  };

  this.pop = () => {
    const result = this.tail.value;
    // this.tail = this.tail.prev;  test push, test stack is empty
    this.tail = this.tail.next;
    return result;
  };

  this.isEmpty = () => {
    return this.tail ? false : true;
  };
}

// test('push', () => {
//   const stack = new Stack();

//   stack.push(1);
//   stack.push(2);
//   stack.push(3);

//   expect(stack.pop()).toBe(3);
//   expect(stack.pop()).toBe(2);
//   expect(stack.pop()).toBe(1);
// });

// test('stack is empty', () => {
//   const stack = new Stack();

//   expect(stack.isEmpty()).toBe(true);

//   stack.push(1);

//   expect(stack.isEmpty()).toBe(false);

//   stack.pop();

//   expect(stack.isEmpty()).toBe(true);
// });

test('queue', () => {
  const queue = new Queue();

  queue.enque(1);
  queue.enque(2);
  queue.enque(3);
  expect(queue.deque()).toBe(1);
  expect(queue.deque()).toBe(2);
  queue.enque(4);
  expect(queue.deque()).toBe(3);
  expect(queue.deque()).toBe(4);
});