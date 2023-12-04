function reverse(str){
  return str.split("").reverse("").join("");
  
}
const result =reverse("nodejs");
console.log(result);

// function repeatString(str){
//   return str.repeat(5);
  
// }
// const result1= repeatString("welcome")
// console.log(result1);

// function repeatString(str,num){
//   if(num<=0){
//     return  `number must be greater than 0`;
//   }
//   return str.repeat(num);
  
// }
// const result1= repeatString("welcome","0");
// console.log(result1);


// function checkString(str,letter){
//   if(str.startsWith(letter))
//  {
//   return true;
//  }else{
//   return `string doesnot start with ${letter}`;
//  }
// }
// const result2= checkString("hello","u");
// console.log(result2);

function ifIncludes(str,letter){
  if(str.includes(letter)){
    return true;
  }else{
    return `string doesnot contain this word`;
  }
  

}
const result5=ifIncludes(" hello everyone good morning","diksha");
console.log(result5);