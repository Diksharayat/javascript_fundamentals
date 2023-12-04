/*

const userValue= new Promise((resolve,reject)=>{
  let user={
    name:"john",
    city:"ludhiana"
  };
  let isFetched=false;
  if(isFetched){
    resolve(user);
  }else{
    reject("there is some error");
  }

});
// console.log(userValue);
userValue.then(function(valueFromResolve){
  console.log(valueFromResolve);
})
.catch(function(error){
  console.log(error);
});

*/
/*
function getUser(){
  return new Promise((resolve,reject)=>{
    const user={
      name:"john",
      city:"delhi"
    }

    let isFetched=true;
    if(isFetched){
      resolve(user);
    }else{
      reject("something went wrong");   
    }
  });
   
   
}
getUser().then((data)=>{
      console.log(data);
}).catch((error)=>{
      console.log(error);
})
*/


const userPost= new Promise((resolve,reject)=>{
  let post={
    id:"first",
    desc:"new post"
  };
  let isFetched=true;
  if(isFetched){
    resolve(post);
  }else{
    reject("there is some error");
  }

});
// console.log(userValue);


const userComment= new Promise((resolve,reject)=>{
  let comment={
    name:"dress",
    city:"ludhiana"
  };
  let isFetched=true;
  if(isFetched){
    resolve(comment);
  }else{
    reject("there is some error");
  }

});
// console.log(userValue);

// we can use promise.all()

// Promise.all([userPost,userComment]).then((data)=>{
//    console.log(data);
// }).catch((err)=>{
//    console.log(err);
// })

// we can use Promise.race()

Promise.race([userPost,userComment]).then((data)=>{
  console.log(data);
}).catch((err)=>{
   console.log(err);
})