// URL
// https://leetcode.com/problems/implement-stack-using-queues/

// INSTRUCTIONS
/*
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

    void push(int x) Pushes element x to the top of the stack.
    int pop() Removes the element on the top of the stack and returns it.
    int top() Returns the element on the top of the stack.
    boolean empty() Returns true if the stack is empty, false otherwise.

Notes:

    You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
    Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False

*/

// SOLUTION
/**
*
*/
class MyStack {
  constructor() {
    this.q1 = [];
    // The second queue is used to make sure the last value is store at the front of the queue
    this.q2 = [];
  }

  /**
  * @param {number} x
  * @returns {void}
  */
  push(x) {
    this.q2.push(x);

    // Push the previous top of stacks to the queue in order
    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }

    // queue 1 becomes the queue which has the top of the stack at the front of the queue
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  /**
  * @returns {number}
  */
  pop() {
    return this.q1.shift();
  }

  /**
  * @returns {number}
  */
  top() {
    return this.q1[0];
  }

  /**
  * @returns {boolean}
  */
  empty() {
    return this.q1.length === 0;
  }
}


// TESTCASES
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top(), 2); // return 2
console.log(myStack.pop(), 2); // return 2
console.log(myStack.empty(), false); // return False
