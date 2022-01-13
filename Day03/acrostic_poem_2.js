let length;

function enterTheText(){
    let text = document.getElementById('text');
    let result = document.getElementById('result');
    let resultArray = text.value.split("");
    let game = document.getElementsByClassName('game')[0];
    length = resultArray.length;
    
    if(length!=3){
        result.innerHTML="3글자를 입력해주세요";
        text.focus();
        game.innerHTML='';
        text.value='';
    }else{
        result.innerHTML = "<p>지금부터 "+text.value+"(으)로 삼행시를 시작해 볼까요?</p>";
        text.value='';

        for(let i=0; i<resultArray.length; i++){
            game.innerHTML += resultArray[i]+" : <input type='text' class='contents'><br/>";
        }
        game.innerHTML += "<br/>"+"<button onclick='enterTheContents()'>입력</button>";
    }
}

function enterTheContents(){
    let result = document.getElementById('acrosticPoemResult');
    let printTxt='';

    for(let i=0; i<length; i++){
        let contents = document.getElementsByClassName('contents')[i];
        let cResult=contents.value;
        console.log("1"+contents.value);
   
        if(cResult == "" || cResult== null || cResult == undefined || (cResult !=null && typeof cResult == "object" && !Object.keys(cResult).length) ){
            cResult='';
            printTxt="<p>내용을 입력해주세요.</p>";
            console.log("3"+cResult);
            break;
        }else{
            console.log("2"+cResult);
            printTxt += "<p style='color:blue; font-size:30px; margin:0;'>"+cResult+"</p>";
        }
    }
    result.innerHTML = "<h2>삼행시 결과</h2>"+printTxt;
}