let menuBurger = document.querySelector('.menu-burger');
let burgerLine = document.querySelector('.header__list');

menuBurger.addEventListener('click', ()=> {
    menuBurger.classList.toggle('active');
    burgerLine.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    let layer = document.querySelector('.block2__img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 4) + 'px,' + ((event.clientY * 0.3) / 4) + 'px,0px)';
    });
    // const elem = document.querySelector('.main__wrapper');
    // document.addEventListener('scroll', () => {
    //     elem.style.backgroundPositionX = '0' + (0.02 * window.pageYOffset)  + 'px';
    // })
    });


let imgArray = document.querySelectorAll('.descript-slider__image');
let currentIndex = 0;
let numberSlide = document.querySelector('.descript-slider__switcher');


function slider() {
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i].classList.add('opacity0');
    }
    imgArray[currentIndex].classList.remove('opacity0');
    numberSlide.innerHTML = currentIndex + 1;
}

document.querySelector('.descript-slider__i').onclick = slider;

document.querySelector('.next-btn').onclick = function() { 
    if (currentIndex == imgArray.length-1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    slider();
};

document.querySelector('.prev-btn').onclick = function() { 
    if (currentIndex-1 == -1) {
       currentIndex = imgArray.length-1;
    } else {
        currentIndex--;
    }
    slider();
};

