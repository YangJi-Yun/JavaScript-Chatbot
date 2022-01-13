let h1= document.getElementsByTagName('h1');

function firstClick(){
    h1[0].innerHTML = "모각코로 오늘도"
}

function secondClick(){
    h1[1].innerHTML = "각잡고 공부해서"    
}

function thirdClick(){
    h1[2].innerHTML = "코딩 천재 되자!"
}

function clickFirst(){
    // let p = document.getElementsByClassName('first')[0];
    // p.innerHTML = "모두 모이자"
    let p = document.getElementsByClassName('first');
    p[0].innerHTML = "모두 모이자";
}
//클래스는 같은 이름이 여러개일 수 있기 때문에 몇 번째에 있는 것인가 선택해야 한다.

function clickSecond(){
    let p = document.getElementsByClassName("second")[0];
    p.innerHTML = "각자하는 건 너무 외로워"
}

function clickThrid(){
    let p = document.getElementById('third');
    p.innerHTML = "코린이들 화이팅!!!"
}