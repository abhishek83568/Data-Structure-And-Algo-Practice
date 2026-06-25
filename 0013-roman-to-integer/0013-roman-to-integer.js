/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   let map={
    I:1,V:5,X:10,L:50,C:100,D:500,M:1000
   }
    let ans=0;
    for(let i=0;i<s.length;i++){
        //For Roman numbers there is a trick the if the current value is less than the next Value ,Then substact the current value which will eventually be normalized when you add the next value
        if(i<s.length-1&&map[s[i]]<map[s[i+1]]){
            ans-=map[s[i]]

        }
        else{
            ans+=map[s[i]];
        }

    }
    return ans;
    
};