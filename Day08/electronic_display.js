const letter = document.getElementById('letter');
const auto = document.getElementById('auto');
const write = document.getElementById('write');
const color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple","black"];

let message = "사람들에게 장미를 나눠주니 내 손에 장미향이 남았다.";
let mArr = new Array();
let text = "";
let cnt = 0;
let toggle = 0;
let interval;
let newLetter;
let flag=false;

function autoClick(){
    if(!flag){
        interval = setInterval(manualClick, 1000);
        auto.innerHTML="stop";
        flag=true;
        // console.log("1:"+cnt)
    }else{
        clearInterval(interval);
        auto.innerHTML="auto";
        flag=false;
        // console.log("2:"+cnt)
    }
}
    
function manualClick(){
    let idx=Math.floor(Math.random()*8);
    let textColor=color[idx];

    mArr=message.split("");
    text+=mArr[cnt];
    cnt++;
    letter.innerHTML=text;
    letter.style.color=textColor;
    // console.log("3:"+cnt)
    
    if(cnt==mArr.length+1){
        cnt=0;
        text="";
        letter.innerHTML="";
        // console.log("4:"+cnt)
    }
}

function writeClick(){
    
    clearInterval(interval);
    letter.innerHTML="<input type='text' id='newLetter' style='col'>"+"</input>";
    newLetter= document.getElementById('newLetter');
    newLetter.focus();
}

function saveClick(){
    message=newLetter.value;
    letter.innerHTML="";
    cnt=0;
    text="";
    flag=false;
    autoClick();
}