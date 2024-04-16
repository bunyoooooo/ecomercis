let NavItems = [...document.querySelectorAll(".header-item")];
let NavItemSpan = [...document.querySelectorAll(".item-activ")];
let cartBody = document.querySelector("nav-card-body");
let shoperShopIcon = document.querySelector(".shoper-shop__icon");
let navCart = document.querySelector(".nav-cart");
let shoperAvoIcon = document.querySelector(".shoper-avo__icon");
let f = 1;
let imgBtnImgs = document.querySelectorAll(".img-btn-img");
let sliderImger = document.querySelector(".slider-imger");
let calckIndick = document.querySelector('.calck-indick')
let calckBtns = document.querySelectorAll('.calck-btn')
let calckaaBtn = document.querySelector('.calck-btnaa')
let cardOrderPrice = document.querySelector('.card-order-price')
let cardOrderPricex = document.querySelector('.card-order-pricex')
for (let i = 0; i < NavItems.length; i++) {
  NavItems[i].addEventListener("click", function () {
    for (let k = 0; k < NavItems.length; k++) {
      NavItemSpan[k].classList.remove("activ-item");
    }
    NavItemSpan[i].classList.add("activ-item");
  });
}

shoperShopIcon.addEventListener("click", function () {
  if (f == 1) {
    navCart.classList.add("cart-active");
    f = f - 1;
  } else if (f == 0) {
    navCart.classList.remove("cart-active");
    f = f + 1;
  }
});
shoperAvoIcon.addEventListener("click", function () {
  if (f == 1) {
    navCart.classList.add("cart-active");
    f = f - 1;
  } else if (f == 0) {
    navCart.classList.remove("cart-active");
    f = f + 1;
  }
});
for (const imgBtnImg of imgBtnImgs) {
  imgBtnImg.addEventListener("click", () => {
    // alert('hello')
    for (let i = 0; i < imgBtnImgs.length; i++) {
      imgBtnImgs[i].classList.remove("img-btn-active");
    }
    // console.log(sliderImger)
    let dataImg = imgBtnImg.getAttribute("data-img");
    imgBtnImg.classList.add("img-btn-active");
    for (img of images) {
      if (img.imageId == dataImg) {
        sliderImger.setAttribute('src',img.imageImg)
      }
    }   
  });
}

for (const calckBtn of calckBtns) {
  calckBtn.addEventListener('click',() => {
    let datasum = calckBtn.getAttribute('data-sum')

    if (datasum == '+') {
      calckIndick.innerHTML++
    }else if(calckIndick.innerHTML == 0){
      calckIndick.innerHTML = calckIndick.innerHTML
    } else{
      calckIndick.innerHTML--
    }
  })
}


calckaaBtn.addEventListener('click',() => {
  cardOrderPricex.innerHTML = `$125.00 x ${calckIndick.innerHTML}`
  cardOrderPrice.innerHTML = `$${calckIndick.innerHTML * 125}`
})