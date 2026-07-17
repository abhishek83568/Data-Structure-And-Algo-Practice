/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i=0;i<numbers.length;i++){
       for(let j=i+1;j<numbers.length;j++){
        var temp=numbers[i]+numbers[j]
        if(temp===target){
            return [i+1,j+1]
        }
       }
    }
    
};