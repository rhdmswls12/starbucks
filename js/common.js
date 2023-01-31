const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('click',function(){ //돋보기만 눌러도 포커스가 되도록
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused'); //클래스 추가
  searchInputEl.setAttribute('placeholder','통합검색'); //속성 지정, 첫번째 인수는 속성의 이름, 두번째 인수는 속성의 값
});

searchInputEl.addEventListener('blur',function(){ //포커스가 해제되면
  searchEl.classList.remove('focused'); //클래스 제거
  searchInputEl.setAttribute('placeholder',' '); //속성 지정, 첫번째 인수는 속성의 이름, 두번째 인수는 속성의 값
});


const thisYear=document.querySelector('.this-year');
thisYear.textContent=new Date().getFullYear(); //현재 날짜 정보를 가지고 있는 date객체에서 
                                               //getFullYear로 현재 년도 정보를 뽑아내서 숫자로 반환
                                               //현재 년도가 this-year 요소에 글자로 삽입됨