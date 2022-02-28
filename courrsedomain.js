// JavaScript Document 
var span = document.getElementsByTagName("span");
var div = document.getElementsByTagName("div");
console.log(span)
console.log(span)
var l = 0 ;
span[1].onclick = ()=>{
    l++;
    for(var i of div){
        if(l==0){i.style.left = '0px';}
        if(l==1){i.style.left = '-740px';}
        if(l==2){i.style.left = "-1480px";}
        if(l==3){i.style.left = "-2240px";}
        if(l==4){i.style.left = "-2960px";}
        if(l>4){l=4;}
    }
}

span[0].onclick = ()=>{
    l--;
    for(var i of div){
        if(l==0){i.style.left = '0px';}
        if(l==1){i.style.left = '-740px';}
        if(l==2){i.style.left = "-1480px";}
        if(l==3){i.style.left = "-2240px";}
        if(l==4){i.style.left = "-2960px";}
        if(l<0){l=0;}
    }
}



const b = document.getElementById("b");
const c = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");
console.log(b);
console.log(c);
b.addEventListener("click",function(){
     c.classList.add("open-modal");
     console.log("click on it")
});
closebtn.addEventListener("click",function(){
    c.classList.remove("open-modal");
});