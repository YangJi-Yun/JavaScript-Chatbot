


let printTxt='';
let str='';
let cnt=0;
let num;
let arr=new Array();
let cal;
let arithmetic;
let operator = document.getElementById('answer_operator');
let result=document.getElementById('answer_result');
function reset(){
    result.innerHTML="";
    operator.innerHTML="";
}
function selectNum(idx){
    let value=document.getElementsByClassName('num')[idx].getAttribute('value');
    //div의 value는 속성값이기 때문에 attribute를 사용해야 한다.
    
    if(cal==""||cal==null||cal==undefined){ 
        str+=value;
        result.innerHTML+=value;
         .innerHTML+=value;
        console.log(str);
    }else{
        console.log("연산자있음");
        // str="";
        result.innerHTML+=value; 
       
    }
    
    if(str=="" || str==null || str==undefined){
        console.log("점없음");
        arr.push(parseInt(value));
        console.log(arr);
    }else{
        arr.push(parseFloat(str));
    }

   
    
}

function selectCal(idx){
    cal=document.getElementsByClassName('calculation')[idx].getAttribute('value');
    arr.push(cal);
    operator.innerHTML+=cal;
}

function arithmeticOperator(){
    arithmetic = document.getElementById('result').getAttribute('value');
    // operator.innerHTML+=arithmetic;

    if(cal==="÷"){ } 
    else if(cal==="x"){}
    else if(cal==="－"){}
    else if(cal==="＋"){}
    

}
