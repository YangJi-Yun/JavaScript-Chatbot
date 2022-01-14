function printItOut(idx){
    let value;
    if(idx==="1"){value=1004;}
    else if(idx==="2"){value="천사";}
    else if(idx==="3"){value=true;}
    else if(idx==="4"){value=null;}
    else if(idx==="6"){ value={"name":"천사"};}
    console.log(typeof(value));

}