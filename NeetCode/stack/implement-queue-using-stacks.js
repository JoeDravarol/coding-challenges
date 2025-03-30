// URL
// https://leetcode.com/problems/implement-queue-using-stacks/

// INSTRUCTIONS
/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

 

Constraints:

    1 <= x <= 9
    At most 100 calls will be made to push, pop, peek, and empty.
    All the calls to pop and peek are valid.

 

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

*/

// SOLUTION
/**
*
*/
class MyQueue {
  constructor() {
    // stack 1 stores the element of stacks 2 but in reverse
    this.s1 = [];
    // stack 2 acts a normal stack i.e keep tracks of the element pushed in 
    this.s2 = [];
  }

  /**
  * @param {number} x
  * @returns {void}
  */
  push(x) {
    this.s2.push(x);
  }


  /**
  * @returns {number}
  */
  pop() {
    if (!this.s1.length) {
      // reverse the elements from stack 2 to stack 1
      while (this.s2.length) {
        this.s1.push(this.s2.pop());
      }
    }

    return this.s1.pop();
  }

  /**
  * @returns {number}
  */
  peek() {
    if (this.s1.length) {
      return this.s1.at(-1);
    }

    return this.s2[0];
  }

  /**
  * @returns {boolean}
  */
  empty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

// TESTCASES
const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek(), 1); // return 1
console.log(myQueue.pop(), 1); // return 1, queue is [2]
console.log(myQueue.empty(), false); // return false
