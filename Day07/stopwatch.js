let time=document.getElementById('time');
let s=0, m=0, h=0;
let timer;
function timerStart(){
    s++;
    if(s>=10){
        s=0;
        m++;
        if(m>=10){
            m=0;
            h++;
        }
    }
    if(0<=s<10 || 0<=m<10 || 0<=h<10){
        time.innerHTML="0"+h+":"+"0"+m+":"+"0"+s;
    }else{
        time.innerHTML=h+":"+m+":"+s;
    }
    timer=setTimeout(timerStart, 1000);
}
function timerStop(){
    clearTimeout(timer);
}
function timerReset(){
    s=0; m=0, h=0;
    time.innerHTML="00:00:00";
}


