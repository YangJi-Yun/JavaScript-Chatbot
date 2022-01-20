let movie1={
    title:"이터널 션샤인",
    date:"개봉 : 2005.11.10",
    director:"감독 : 미셸 공드리",
    actor:"주연 : 짐 캐리, 케이트 윈슬렛, 커스틴 던스트",
    genre:"장르 : 드라마, 멜로/로맨스, SF",
    plot:"조엘은 아픈 기억만을 지워준다는 라쿠나사를 찾아가 헤어진 연인 클레멘타인의 기억을 지우기로 결심한다. 기억이 사라져 갈수록 조엘은 사랑이 시작되던 순간, 행복한 기억들, 가슴 속에 각인된 추억을 지우기 싫어지기만 하는데... 당신을 지우면 이 아픔도 사라질까요? 사랑은 그렇게 다시 기억된다."
}
let movie2={
    title:"인셉션",
    date:"개봉 : 2010.07.21",
    director:"감독 : 크리스토퍼 놀란",
    actor:"주연 : 레오나르도 디카프리오, 와타나베 켄, 조셈 고든 레빗, 마리옹 꼬띠아르, 엘렌 페이지, 톰 하디",
    genre:"장르 : 액션",
    plot:"타인의 꿈에 들어가 생각을 훔치는 특수 보안요원 코브. 그를 이용해 라이벌 기업의 정보를 빼내고자 하는 사이토는 코브에게 생각을 훔치는 것이 아닌, 생각을 심는 ‘인셉션’ 작전을 제안한다. 성공 조건으로 국제적인 수배자가 되어있는 코브의 신분을 바꿔주겠다는 거부할 수 없는 제안을 하고, 사랑하는 아이들에게 돌아가기 위해 그 제안을 받아들인다. 최강의 팀을 구성, 표적인 피셔에게 접근해서 ‘인셉션’ 작전을 실행하지만 예기치 못한 사건들과 마주하게 되는데… 꿈 VS 현실 시간, 규칙, 타이밍 모든 것이 완벽해야만 하는, 단 한 번도 성공한 적 없는 ‘인셉션’ 작전이 시작된다!"
}
let movie3={
    title:"인턴",
    date:"개봉 : 2015.09.24",
    director:"감독 : 낸시 마이어스",
    actor:"주연 : 앤 해서웨이, 로버트 드니로",
    genre:"장르 : 코미디",
    plot:"창업 1년 반 만에 직원 220명의 성공신화를 이룬 줄스(앤 해서웨이). TPO에 맞는 패션센스, 업무를 위해 사무실에서도 끊임 없는 체력관리, 야근하는 직원 챙겨주고, 고객을 위해 박스포장까지 직접 하는 열정적인 30세 여성 CEO! 한편, 수십 년 직장생활에서 비롯된 노하우와 나이만큼 풍부한 인생경험이 무기인 만능 70세의 벤(로버트 드 니로)을 인턴으로 채용하게 되는데.."
}

let movie=[movie1, movie2, movie3];
let m;
let tit;
let date;
let director;
let actor;
let genre;
let plot;

for(let i=0; i<3; i++){
    tit=document.getElementsByClassName('tit')[i];
    date=document.getElementsByClassName('date')[i];
    director=document.getElementsByClassName('director')[i];
    actor=document.getElementsByClassName('actor')[i];
    genre=document.getElementsByClassName('genre')[i];
    plot=document.getElementsByClassName('plot')[i];
    m=movie[i];
    tit.innerHTML=m.title;
    date.innerHTML=m.date;
    director.innerHTML=m.director;
    actor.innerHTML=m.actor;
    genre.innerHTML=m.genre;
    plot.innerHTML=m.plot;
}
