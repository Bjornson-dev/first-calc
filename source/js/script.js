"use strict";

// ////// Анимация цифр
// let user = {},
//     glowBtn = document.querySelector('.glowAnim');

// document.onmousemove = getGlow;
// // найти центр в кнопке
// let btnPos = glowBtn.getBoundingClientRect(),
//     btnCenterX = btnPos.x + (btnPos.width / 2),
//     btnCenterY = btnPos.y + (btnPos.height / 2);

// // Анимация при приближении
// function getGlow(event) {
//   let x = 0, y = 0, 
//       btnUserDistanceX = user.x - btnCenterX,
//       btnUserDistanceY = user.y - btnCenterY;
//   // Определяем место курсора
//   x = window.event.clientX;
//   y = window.event.clientY;

//   user.x = x;
//   user.y = y;

//   console.log(btnUserDistanceX + " || " + btnUserDistanceY);
//   // Манипулируем свечением
//   if ( (Math.abs(btnUserDistanceX) < 60 )  && ( Math.abs(btnUserDistanceY)) < 60 ) {
//     glowBtn.style.boxShadow = `0 0 ${30 - ( Math.max(Math.abs(btnUserDistanceX) + Math.abs(btnUserDistanceY) ) / 3)}px rgb(0, 225, 255)`
//     console.log("y")
//   } else {
//     glowBtn.style.boxShadow = `0 0 0px rgb(0, 225, 255)`
//   }
// }  

/////// Анимация кнопок ввода
let cursor = {},
    glowButtons = document.querySelectorAll(".glowAnim");

document.onmousemove = btnGlowAnimation;


function btnGlowAnimation(event) {
  let userX = window.event.clientX, // положение курсора
      userY = window.event.clientY;

  glowButtons.forEach( (elem, event) => {
    // найти центр в кнопках 
    let btnPos = elem.getBoundingClientRect(),
        btnCenterX = btnPos.x + (btnPos.width / 2),
        btnCenterY = btnPos.y + (btnPos.height / 2);
        
  
    addGlowAnimation(elem, btnCenterX, btnCenterY, userX, userY);
  });
}


function addGlowAnimation(btn, btnX, btnY, userX, userY) {
    let btnUserDistanceX = userX - btnX,
        btnUserDistanceY = userY - btnY;

    // Определяем место курсора

    if ( (Math.abs(btnUserDistanceX) < 60 )  && ( Math.abs(btnUserDistanceY)) < 60 ) {
      btn.style.boxShadow = `0 0 ${30 - (Math.max(Math.abs(btnUserDistanceX) + Math.abs(btnUserDistanceY))) / 2.3}px rgb(0, 225, 255)`
    console.log("y")
    } else {
      btn.style.boxShadow = `0 0 0px rgb(0, 225, 255)`
    }
}





