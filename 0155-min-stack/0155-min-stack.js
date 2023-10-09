
var MinStack = function() {
    this.stack = [];
    this.iStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if (this.iStack.length){
        if (val <= this.stack[this.iStack[this.iStack.length - 1]]) {
            this.iStack.push(this.stack.length - 1)
        } else {
            this.iStack.push(this.iStack[this.iStack.length - 1])
        }
    } else {
        this.iStack.push(0)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.iStack.pop();
};



/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.iStack[this.iStack.length - 1]]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */