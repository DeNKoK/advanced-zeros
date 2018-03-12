module.exports = function getZerosCount(number, base) {
  var Ans = [];
 var d = 2;
   while (d * d <= base) {
     if (base % d == 0){
        Ans.unshift(d);
        base = Math.floor(base/d);
      }
       else {d += 1;};
    }
   if (base > 1) {
       Ans.unshift(base);
   };

function compareReversed(a, b) {
    return b - a;
  }

  Ans.sort(compareReversed);
   

 let zeros = 0;

 while(number > 0) {
  number = Math.floor(number / Ans[0]);
  zeros += number;
 };

 return zeros;
}