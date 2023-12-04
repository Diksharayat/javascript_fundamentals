// console.log("this is another way ");
/*
const arr= document.getElementsByTagName('li');
const convertedEL = [...arr];
convertedEL.forEach(li=>{
  li.style.color='red'
  if(li.innerHTML===javascript){
      li.style.textDecoration='line-through';
  }
})
*/

const msg=()=>{
  console.log("hello everyone");
}


console.log("before function set time out");
setTimeout(msg,3000);
console.log("after function set time out");
