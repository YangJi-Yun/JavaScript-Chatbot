let smile=document.querySelector('.smile');
let quiz=document.querySelector('.quiz');
let answerBox=document.getElementById('answerBox');
let topTxt=document.querySelector('.top');
let answer=document.getElementById('answer');
let result=document.getElementById('result');
let bBtn=document.querySelector('.bBtn');
let snowing=document.querySelector('.snowing');
let snowBox=document.querySelector('.snowBox');
let correct;
let back; let next; let str;
let cnt=0;
let i=0;
let type;
let qustionArr=[
    {q:'01) 학생들이 제일 싫어하는 피자는?', a:'책피자'},
    {q:'02) 비가 한 시간 동안 내리는 것은?', a:'추적60분'},
    {q:'03) 가장 잠을 많이 자는 연예인은?', a:'이미자'},
    {q:'04) 딸기가 직장을 잃으면?', a:'딸기시럽'}
];

smile.addEventListener('click', () => {
    answerBox.innerHTML="스마일에 대해 물어보세요.";
    readySet();    
    createButton();
    type=1;
});

quiz.addEventListener('click', () => {
    readySet();    
    createButton();
    answerBox.innerHTML=qustionArr[0].q;
});


snowing.addEventListener('click', () => {
    readySet();
    createButton();
    snowBox.style.display="block";
    for(let i=0; i<300; i++){
        createSnow();
    }
    answerBox.innerHTML="♪펑펑 눈이옵니다♬"
    answerBox.style.color="white";
});


bBtn.addEventListener('click', () => {
    correctAnswer();
    if(type===1){
        introduce();
    }else{
        startQuiz();
    }
});

function introduce(){
    if(correct.includes('나이') || correct.includes('몇살') || correct.includes('age')){
        str="서른마흔다섯입니다.";
    }else if(correct.includes('성별') || correct.includes('gender') || correct.includes('sex')) {
        str="남자입니다.";
    }else if(correct==""){
        alert('질문을 해주세요');
        str="스마일에 대해 물어보세요";
    }else{
        alert('정확한 질문을 해주세요');
        str="스마일에 대해 물어보세요";
    }
    answer.value="";
    answer.focus();
    answerBox.innerHTML=str;
}

function startQuiz(){
    if(correct===qustionArr[i].a){
        alert("정답입니다.");
        cnt++;
    }else {
        alert("틀렸습니다.");
    }
    answer.value="";
    answer.focus();
    ++i;
    if(i>=qustionArr.length){
        answerBox.innerHTML=qustionArr.length+"개 중에 "+cnt+"개 맞췄습니다.";
        i=0;
        return;
    }else{
        answerBox.innerHTML=qustionArr[i].q;
    }
}

function correctAnswer(){
    correct=answer.value;
    correct=correct.replace(/(\s*)/g, "");
    correct=correct.toLowerCase();
}

function createSnow(){
    const el = document.createElement("div");
    el.classList.add('snow');
    el.style.marginLeft = randomPosition() + 'px';
    snowBox.appendChild(el);
}
function randomPosition(){
    return Math.floor(Math.random()*window.innerWidth);
}

function readySet(){
    smile.style.display="none";
    quiz.style.display="none";
    snowing.style.display="none";
    topTxt.classList.add('sort');
}

function createButton(){
    back=document.createElement('button');
    back.setAttribute('class', 'back');
    back.innerHTML="뒤로"; 

    next=document.createElement('button');
    next.setAttribute('class', 'next');
    next.innerHTML="처음으로";

    topTxt.appendChild(back);
    topTxt.appendChild(next);
    
     // back.addEventListener('click', () => {
    //     history.go(-1);
    // })

    next.addEventListener('click', () => {
        history.go(0);
    })
}

