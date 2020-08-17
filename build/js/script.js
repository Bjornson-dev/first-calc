"use strict";

/////// Анимация кнопок ввода
let cursor = {},
    glowButtons = document.querySelectorAll(".glowAnim");

document.onmousemove = () => btnGlowAnimation(event, glowButtons);

function btnGlowAnimation(event, buttons) {
  let userX = window.event.clientX, // положение курсора
      userY = window.event.clientY;

  buttons.forEach( (elem, event) => {
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
    } 
    else {
      btn.style.boxShadow = `0 0 0px rgb(0, 225, 255)`
    }
}


////// Анимация кликов и подстановка значения в аутпут
glowButtons.forEach( (elem) => {
  elem.onclick = () => numBtnClick(elem);
});

let output = document.querySelector(".output");
let resultValue = 0;

function numBtnClick(btn) {
  let rippleX = window.event.clientX - btn.getBoundingClientRect().x,
      rippleY = window.event.clientY - btn.getBoundingClientRect().y;


  btn.insertAdjacentHTML('beforeend', `<div class="ripple" style="top:${rippleY - 50}px; left:${rippleX - 50}px"></div>`);
  setTimeout(() => btn.querySelector("div.ripple").remove(), 500);

  output.value = output.value + `${btn.value}`;

  let result = document.querySelector('.result');
  //// калькулирование
  function calculation() {
    if (resultValue == 0) {
      if (btn.classList.contains('funcBtnC')) {
        resultValue = 0;
        output.value = '';
        result.textContent = resultValue;
      }
      if (btn.classList.contains('funcBtnMult')) {
        resultValue = output.value;
        console.log(resultValue)
        output.value = null;
        result.textContent = resultValue;
      }
      if (btn.classList.contains('funcBtnDeg')) {
        resultValue = output.value;
        console.log(resultValue);
        output.value = null;
        result.textContent = resultValue;
      } 
      if (btn.classList.contains('funcBtnMin')) {
        resultValue = output.value;
        console.log(resultValue);
        output.value = null;
        result.textContent = resultValue;
      } 
      if (btn.classList.contains('funcBtnPlus')) {
        resultValue = output.value;
        console.log(resultValue);
        output.value = null;
        result.textContent = resultValue;
      }
    } else {
      if (btn.classList.contains('funcBtnC')) {
        resultValue = 0;
        output.value = '';
        result.textContent = resultValue;
      }
      if (btn.classList.contains('funcBtnMult')) {
        resultValue = +resultValue * +output.value;
        console.log(resultValue);
        output.value = null;
        result.textContent = resultValue;
      } 
      if (btn.classList.contains('funcBtnDeg')) {
        resultValue = +resultValue / +output.value;
        console.log(resultValue);
        output.value = null;
        result.textContent = resultValue;
      } 
      if (btn.classList.contains('funcBtnMin')) {
        resultValue = +resultValue - +output.value;
        console.log(resultValue);
        output.value = null;
        result.textContent = resultValue;
      } 
      if (btn.classList.contains('funcBtnPlus')) {
        resultValue = +resultValue + +output.value;
        console.log(resultValue);
        output.value = null;
        result.textContent = resultValue;
      }
    }
  }
  calculation()
}


