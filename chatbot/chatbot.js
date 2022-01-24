let smile=document.querySelector('.smile');
let quiz=document.querySelector('.quiz');
let topTxt=document.querySelector('.top');
let back; let next;

smile.addEventListener('click', () => {
    topTxt.innerHTML="<p>스마일에 대해 물어보세요.</p>";

    topTxt.classList.add('sort');
    createButton();

    back.addEventListener('click', () => {
        history.go(-1);
    })

    next.addEventListener('click', () => {
        history.go(0);
    })

    let answer;
    let bBtn=document.querySelector('.bBtn');
    let answerTxt=document.getElementById('answerTxt');
    let str;
    bBtn.addEventListener('click', () => {
        answer=document.getElementById('answer').value;
        answer=answer.replace(/(\s*)/g, "");
        answer=answer.toLowerCase();

        if(answer.includes('나이') || answer.includes('몇살') || answer.includes('age')){
            str="서른마흔다섯입니다.";
        }else if(answer.includes('성별') || answer.includes('gender') || answer.includes('sex')) {
            str="남자입니다.";
        }

        answerTxt.innerHTML=str;
    })

});

function createButton(){
    back=document.createElement('button');
    back.setAttribute('class', 'back');
    back.innerHTML="뒤로"; 

    next=document.createElement('button');
    next.setAttribute('class', 'next');
    next.innerHTML="처음으로";

    topTxt.appendChild(back);
    topTxt.appendChild(next);
}


