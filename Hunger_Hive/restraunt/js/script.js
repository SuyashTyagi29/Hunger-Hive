const ENTREE50=document.querySelector(".button1")
const SWEETPIE=document.querySelector(".button2")
const NEWBIRD20=document.querySelector(".button3")
let flag1=false
let flag2=false
let flag3=false

ENTREE50.addEventListener('click',function(){
    if (!flag1){
        ENTREE50.textContent = 'ENTREE50';
        flag1 =true;
    }
})
SWEETPIE.addEventListener('click',function(){
    if (!flag2){
        SWEETPIE.textContent = 'SWEETPIE';
        flag2 = true;
    }
})
NEWBIRD20.addEventListener('click',function(){
    if (!flag3){
        NEWBIRD20.textContent = 'NEWBIRD';
        flag3= true;
    }
})