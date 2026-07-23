/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false
        }
    }
    return true


};