'use strict'


window.onload = function() {
  let y = document.querySelectorAll(".wrapper div")[12].offsetTop;
  let x = document.querySelectorAll(".wrapper div")[12].offsetLeft;
  //Why dont work without behavior
  window.scroll({
    top:y,
    left:x,
    behavior: "smooth"
  })
};

///////////////////
///////////////////
////wheel event////
///////////////////
///////////////////

let yy = document.querySelectorAll(".wrapper div")[12].offsetHeight;
let xx = document.querySelectorAll(".wrapper div")[12].offsetWidth;

console.log("xx " +xx);
console.log("yy " + yy);

let image_slider = document.querySelector(".main-content_image_slider");
let scrollSizeY = 0;
let scrollSizeX = 0;
window.addEventListener("wheel", function(e) {
  scrollSizeY = scrollSizeY + e.deltaY;
  scrollSizeX = scrollSizeX + e.deltaX;
  if(scrollSizeY > 900) {
    scrollSizeY = 0;
    console.log("up");
    window.scrollBy({
      top:yy,
      // behavior: "smooth" //TODO
    })
  } else if (scrollSizeY < -900) {
    console.log("down");
    scrollSizeY = 0;
    window.scrollBy({
      top:-yy,
      // behavior: "smooth" //TODO
    })
  }

  if(scrollSizeX > 500) {
    scrollSizeX = 0;
    console.log("left");
    window.scrollBy({
      left:xx,
      // behavior: "smooth" //TODO
    })
  } else if (scrollSizeX < -500) {
    console.log("right");
    scrollSizeX = 0;
    window.scrollBy({
      left:-xx,
      // behavior: "smooth" //TODO
    })
  }
  console.log(scrollSizeX)
});

let div = document.querySelectorAll(".wrapper div");
for(let i = 0; i < div.length; i++){
  div[i].style.order = i;
}