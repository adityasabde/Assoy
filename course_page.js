const btn = document.querySelector(".btn")
const c = document.querySelector(".rightcont");
const bottombtn1 = document.querySelector(".bottombtn1");
console.log(c);

bottombtn1.addEventListener("click",function(){
    c.classList.remove("open");
})

btn.addEventListener("click",function(){
     c.classList.add("open");
    //  console.log(c.classList);
});
