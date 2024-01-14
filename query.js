let add=document.getElementById("add");
let reset=document.getElementById("reset");
let minus=document.getElementById("remove");
let data=document.getElementById("count");
let count=0;
add.addEventListener("click",()=>{
count+=1;
data.innerText=count;
// data.style.transitionDuration="0.5"
})

remove.addEventListener("click",()=>{
    count-=1;
    data.innerText=count;
})

reset.addEventListener("click",()=>{
        count=0;
        data.innerText=count;
})