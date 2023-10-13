
var MyLinkedList = function() {
    this.head = null
};

var Node = function(val = 0, next = null) {
    this.val = val
    this.next = next
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let curr = this.head
    while(curr && curr.next && i < index) {
        curr = curr.next
        i++
    }
    return curr && i === index ? curr.val : -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val, this.head)
    this.head = newNode
    return
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let curr = this.head;
    if (!curr) {
        this.addAtHead(val)
        return
    }
    while(curr.next) {
        curr = curr.next
    }
    curr.next = new Node(val)
    return
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val)
        return
    }
    let i = 0;
    let curr = this.head
    while(curr && curr.next && i < index - 1) {
        curr = curr.next
        i++
    }
    if (i + 1 === index && curr) {
        // if (curr.next) {
            curr.next = new Node (val, curr.next)
        // } else {
            // curr.next = new Node(val)
        // }
    }
    return
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index === 0) {
        this.head = this.head.next
        return
    }
    let i = 0;
    let curr = this.head
    while(curr.next && i < index - 1) {
        curr = curr.next
        i++
    }
    if (i + 1 === index) {
        if (!curr.next) {
            curr.next = null
        } else {
            curr.next = curr.next.next
        }
    }
    return
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */