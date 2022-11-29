// let conter = document.querySelector('.conter');
// let count =1;
// setInterval(()=> {
//     if (count <75)
//     count++;
//     conter.innerText = count;
// },1);
let counters = document.querySelectorAll('.counter');
console.log(counters)
let time = 300;
counters.forEach(counter => {
   let  updateCount= () => {
     let target = +counter.getAttribute('data-target');
     console.log(target)
     let count = +counter.innerText;
     console.log(count)
     let increment = target / time;
     console.log(increment)

     if(count < target){
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
     }
     else{
        counter.innerText = target;
     }
   };
   updateCount();
});
  
