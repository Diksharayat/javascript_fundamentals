//Select elements
const pName = document.querySelector(".pName");
const pPrice = document.querySelector(".pPrice");
const pDesc = document.querySelector(".pDesc");
const pQty = document.querySelector(".pQty");
const category = document.querySelector(".category");
const msg = document.querySelector(".msg");
const form = document.querySelector('form');
// console.log(form);
console.log(pName);


pName.onchange=(e)=>{
  console.log("the change has been oucured",);
  msg.textContent="person is typing";
}

form.onsubmit=(e)=>{
  //  console.log("form submitted");
   e.preventDefault();

   const name=pName.value;
   const price=pPrice.value; 
   const desc=pDesc.value;
   const qty=pQty.value;
   const cat=category.value;

    //  reset after submit
  pName.value="";
  pPrice.value="";
  pDesc.value="";
  pQty.value="";
  category.value="";
  console.log({name,price,desc,qty,cat});
}


pName.onfocus=(e)=>{
  console.log("form focussed");
  msg.textContent="you are typing.....💚";
}

pName.onblur=(e)=>{
  console.log("form focussed");
  msg.textContent="you have stopped typing.....💔";
}

