let numbers=[1,2,3,4,5,6,7,8,9]
const numprint=()=>{
    setTimeout(()=>{
      numbers.forEach((print)=>console.log(print));
    },1000)
    
};

const message=()=>{
  setTimeout(()=>{
    console.log("workdone")  
  },2000)
 
}
// message();

const addnumber=(num,callback,callback2)=>{
  setTimeout(()=>{
    numbers.push(num);
    callback();
    callback2();
  },1500)

};
addnumber(70,numprint,message);
// numprint();

