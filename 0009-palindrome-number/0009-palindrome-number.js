/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let originalNum=x;
    let reverseNum=0;
    while(x>0){
        let lastDigit=x%10;
        reverseNum=reverseNum*10+lastDigit;
        x=Math.floor(x/10);
    }

    return reverseNum==originalNum
    
};