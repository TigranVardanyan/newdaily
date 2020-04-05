// 'use strict'
//
//
//
//
// class Homepage {
//   myWindow = document.body;
//   windowRotateDefaultParams = 'rotate3d(-0.5, 0.4, 0.3, 57deg)';
//   windowRotateAlignScreen = 'rotate3d(0, 0, 0, 0deg)';
//   rotated = true;
//   transformOriginX = 50;
//   transformOriginY = 50;
//   constructor () {
//     this.myWindow.style.transform = this.windowRotateDefaultParams;
//     this.myWindow.style.transformOrigin = `${this.transformOriginX}% ${this.transformOriginY}%`;
//     let iframes = this.myWindow.querySelectorAll("iframe");
//     for(let i = 0; i < iframes.length; i++){
//       iframes[i].style.pointerEvents = "none";
//     }
//   }
//
//   SwitchScreenPosition() {
//     if (this.rotated == true) {
//       this.myWindow.style.transform = this.windowRotateAlignScreen;
//       this.rotated = false;
//     } else {
//       this.myWindow.style.transform = this.windowRotateDefaultParams;
//       this.rotated = true;
//     }
//   }
//   Movingcreen(e) {
//     if(e.key == "ArrowRight" && this.transformOriginY < 100) {
//       this.transformOriginY +=10;
//       this.myWindow.style.transformOrigin = `${this.transformOriginX}% ${this.transformOriginY}%`;
//     } else if (e.key == "ArrowLeft" && this.transformOriginY > 0) {
//       this.transformOriginY -=10;
//       this.myWindow.style.transformOrigin = `${this.transformOriginX}% ${this.transformOriginY}%`;
//     }    else if (e.key == "ArrowUp" && this.transformOriginX < 100) {
//       this.transformOriginX +=10;
//       this.myWindow.style.transformOrigin = `${this.transformOriginX}% ${this.transformOriginY}%`;
//     } else if (e.key == "ArrowDown" && this.transformOriginX > 0) {
//       this.transformOriginX -=10;
//       this.myWindow.style.transformOrigin = `${this.transformOriginX}% ${this.transformOriginY}%`;
//     } else {
//     }
//   }
// }
//
// let MyDaily = new Homepage();
// MyDaily.myWindow.addEventListener('click', function() {
//   MyDaily.SwitchScreenPosition();
// });
//
// MyDaily.myWindow.addEventListener('keydown', function() {
//   MyDaily.Movingcreen(event);
// });


document.addEventListener("DOMContentLoaded", function() {
  let x = document.querySelectorAll(".wrapper div")[13].offsetHeight;
  let y = document.querySelectorAll(".wrapper div")[13].offsetWidth;
  console.log(x);
  console.log(y);
  window.scrollTo({
    top: 1000,
    left: 500,
    behavior: "smooth"
  })
});