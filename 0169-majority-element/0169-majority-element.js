/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let obj={}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]+=1
        }
        else{
            obj[nums[i]]=1
        }
    }
    let maxNum=0;
    let result=0;
   for(const key in obj){
   
    if(obj[key]>maxNum){
        maxNum=obj[key]
        result=key
    }
   }
return Number(result)
};