let number=document.querySelectorAll('.number');
let num;
let phoneNum=[];
let show=document.getElementById('show_num');
let cnt=0;
let str="-";
let temp;
let text;
for(let i=0; i<number.length; i++){
    number[i].addEventListener('click',() => {
        num=number[i].value;
        console.log(number[i].value);
        cnt++;
        console.log("cnt:"+cnt);
        if(cnt==4){
            phoneNum.splice(cnt,0,str);
        }else if(8<=cnt && cnt<=11){
            if(cnt==8){
                phoneNum.splice(cnt-3,0,str);
            }else{
                temp=phoneNum[cnt-4];
                phoneNum[cnt-4]=phoneNum[cnt-3];
                phoneNum[cnt-3]=temp;
            }
        }else if(cnt>=12){
            for(let j=0; j<phoneNum.length; j++){
                if(phoneNum[j]==str) {
                    phoneNum.splice(j,1);
                    j--;
                }
            } 
        }
        phoneNum.push(num);

        let print="";
        for(let k=0; k<phoneNum.length; k++){
            print+=phoneNum[k];
        }
        show.innerHTML=print;
        text=print;
    });
}

let flag=true;
let timeOutId;
let pCnt=0;
let point="";
document.querySelector('.icon').addEventListener('click', () => {
    if(flag){
        document.querySelector('.btn_box').style.display="none";
        document.querySelector('.call_box').style.display="grid";
        document.getElementById('phone_call').style.display="block";
        document.querySelector('.fa-phone-alt').classList.add('end');
        const dot=document.getElementById('dot');
        dot.innerHTML=".";
        timeOutId=setInterval(() => {
            console.log(pCnt+"///"+point);
            pCnt++;
            if(pCnt>3){
                pCnt=0;
                point="";
            }else {
                point+=".";
            }
            dot.innerHTML=point;
        }, 500);

        flag=false;
    }else{
        document.querySelector('.btn_box').style.display="grid";
        document.querySelector('.call_box').style.display="none";
        document.getElementById('phone_call').style.display="none";
        document.querySelector('.fa-phone-alt').classList.remove('end');
        clearInterval(timeOutId);
        flag=true;
    }
})

