let time=document.getElementById('time');
let s=0, m=0, h=0;
let timer;
function timerStart(){
    s++;
    if(s>=60){
        s=0;
        m++;
        if(m>=60){
            m=0;
            h++;
        }
    }
    if(0<=s<10 || 0<=m<10 || 0<=h<10){
        let text="";
        if(0<=h<10) text+="0"+h;
        else text+=h;

        if(0<=m<10) text+=":0"+m;
        else text+=":"+m;

        if(0<=s<10) text+=":0"+s;
        else text+=":"+s;

        time.innerHTML=text;
    }else{
        time.innerHTML=h+":"+m+":"+s;
    }
    timer=setTimeout(timerStart, 1000);
}
function timerStop(){
    if(timer!=null)
    clearTimeout(timer);
}
function timerReset(){
    s=0; m=0, h=0;
    time.innerHTML="00:00:00";
}


