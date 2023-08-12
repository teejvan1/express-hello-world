'use strict'

const buttons = document.querySelectorAll('button')
const slides = document.querySelectorAll('.slide-img')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    buttons.forEach(function (elem) {
      elem.classList.remove('red')
    })
    slides.forEach(function (elem) {
      elem.classList.add('hide')
      elem.classList.remove('show')
    })
    const number = button.id - 1
    button.classList.add('red')
    slides[number].classList.add('show')
  })
})

right.addEventListener('click', function () {
  let number = 0
  for (const button of buttons) {
    if (button.classList.contains('red')) {
      number = button.id - 1
    }
  }
  if (number === 5) {
    number = -1
  }
  buttons.forEach(function (elem) {
    elem.classList.remove('red')
  })
  slides.forEach(function (elem) {
    elem.classList.add('hide')
    elem.classList.remove('show')
  })
  buttons[number + 1].classList.add('red')
  slides[number + 1].classList.add('show')
})

left.addEventListener('click', function () {
  let number = 0
  for (const button of buttons) {
    if (button.classList.contains('red')) {
      number = button.id - 1
    }
  }
  if (number === 0) {
    number = 6
  }
  buttons.forEach(function (elem) {
    elem.classList.remove('red')
  })
  slides.forEach(function (elem) {
    elem.classList.add('hide')
    elem.classList.remove('show')
  })
  buttons[number - 1].classList.add('red')
  slides[number - 1].classList.add('show')
})
