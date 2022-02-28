const counters = document.querySelectorAll('.counter');
const speed = 900;

counters.forEach(counters => {
        const updateCount = () =>{
        const target = counters.getAttribute('data-target');
        const count = +counters.innerText;
       
        const  inc = target / speed;
    //    console.log(inc) 
        if(count<target){
        counters.innerText = Math.ceil(count + inc);
        setTimeout(updateCount,20);
        }
        else{
            counters.innerText = target;
        }
        // console.log(target);
    }
    updateCount();
});

const animationtext = document.getElementById("animationtext");
const text = "Let's start journey together !";
let index = 1;

setInterval(animation,200);

function animation(){
    animationtext.innerHTML = text.slice(0,index);
    index++;
  if(index > text.length){
      index = 1;
  }
}

