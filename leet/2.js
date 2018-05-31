// Add Two Numbers

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    cur = dummyHead;
  let carry = 0;

  while (p || q) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummyHead.next;
};

let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
n2.next = n3;
n3.next = n4;

let n5 = new ListNode(5);
let n6 = new ListNode(6);
let n44 = new ListNode(4);
n5.next = n6;
n6.next = n44;

var x = addTwoNumbers(n2, n5);
console.log(x);
