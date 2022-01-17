function calculation(){
    let x = document.getElementById('num1');
    let y = document.getElementById('num2');
    // console.log("1"+typeof x+"/"+typeof y);
    
    x=parseInt(x.value);
    y=parseInt(y.value);
    // console.log("2"+typeof x+"/"+typeof y);

    let target = document.getElementById('arithmetic-operation');
    target = target.options[target.selectedIndex].value;
    // console.log(x+"/"+y+"/"+cal);

    const result = document.getElementById('result');
    let val;
    if((x==null||x==""||x==undefined||isNaN(x))||(y==null||y==""||y==undefined||isNaN(y))){
        // console.log("숫자아님");
        result.innerHTML="숫자를 입력해주세요";
    }else{
        if(target==="plus"){ val = x+y; }
        else if(target==="subtract"){ val = x-y; }
        else if(target==="multiply"){ val = x*y; }
        else { val = x/y; }
        result.innerHTML = val;
    }
}