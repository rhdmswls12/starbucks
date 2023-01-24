const badgeEl=document.querySelector('header .badges');
const toTopEl=document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    }); //gsap.to(요소, 지속시간, 옵션);
    //top으로 올라가는 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //top으로 올라가는 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100 //오른쪽으로 100px만큼 이동해서 숨김
    });
  }
},300));

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo: 0 //화면의 위치를 0px 위치로 이동
  })
});

const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, //0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
}); //fade-in 클래스 개수만큼 함수 실행


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동재생
  loop: true //마지막 슬라이드 다음 다시 첫번째 슬라이드 보여줌
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부(=클릭하면서 제어)
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전 버튼
    nextEl: '.promotion .swiper-next' //다음 버튼
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})


const promotionEl=document.querySelector('.promotion');
const promotionToggleBtn=document.querySelector('.toggle-promotion');
let isHidePromotion=false; //let이니까 나중에 다시 할당 가능, 보이는 상태
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion=!isHidePromotion 
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});//클릭할 때마다 전환시켜 주는 코드


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size, 
      repeat: -1, //무한 반복
      yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut, //ease함수 사용
      delay: random(0, delay) //0부터 인수로 받은 delay까지 랜덤으로 지연 시간 생성
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls=document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show') //토글할 요소, 토글할 요소의 이름
  .addTo(new ScrollMagic.Controller());
});
