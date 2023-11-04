/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count = 0;
    while (sandwiches.length || students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            count = 0
        } else {
            students.push(students.shift())
            count++
        }
        if (count === students.length) return count
    }
    return 0
};
count = 0
students = [1,1,1,0,0,1]
sandwiches = [1,0,0,0,1,1]