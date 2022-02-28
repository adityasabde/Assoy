
const a = document.querySelectorAll(".lessons");


// console.log(b);

a.forEach(function(btn){
    btn.addEventListener("click",function(e){
          console.log(e.currentTarget)
         const target = e.currentTarget.parentElement;


         let x = target.getElementsByTagName("span");

         window.scroll({
            behavior: 'smooth'
          });
          console.log(x);
          x[0].classList.toggle("sublesson");
    });
}
)
