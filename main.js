let plusBtns = document.getElementsByClassName("plus-btn");
let minusBtns = document.getElementsByClassName("minus-btn");
let heartBtns = document.getElementsByClassName("fa-heart");
let trashBtns = document.querySelectorAll(".fa-trash-alt");

//incrementing quantity
for (let btn of plusBtns) {
  btn.addEventListener("click", function () {
    btn.nextElementSibling.innerHTML++;
    total();
  });
}

//decrement quanity
for (let btn of minusBtns) {
  // let qte = document.getElementsByClassName("qte");
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.innerHTML > 0) {
      btn.previousElementSibling.innerHTML--;
      total();
    }
  });
}

//toggle heart color
for (let i = 0; i < heartBtns.length; i++) {
  heartBtns[i].addEventListener("click", function () {
    heartBtns[i].classList.toggle("toggleHeart");
  });
}

//remove product
for (let btn of trashBtns) {
  btn.addEventListener("click", function () {
    btn.parentElement.parentElement.parentElement.remove();
    total();
  });
}
function total() {
  let prices = document.getElementsByClassName("unit-price");
  let qtity = document.getElementsByClassName("qte");
  let total = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < qtity.length; i++) {
    sum = sum + qtity[i].innerHTML * prices[i].innerHTML;
  }
  return (total.innerHTML = sum);
}
