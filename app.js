let swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= 1170 ? 'vertical' : 'horizontal';

    return direction;
}


let secondSwiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    direction: getDirectionTwo(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function getDirectionTwo() {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= 1000 ? 'vertical' : 'horizontal';

    return direction;
}