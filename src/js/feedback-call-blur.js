const feedback = document.querySelector('.feedback')
const showFeedbackButton = document.querySelectorAll(
  '#showFeedback, #showFeedback-mobile'
)
const closeFeedbackButton = document.getElementById('closeFeedback')
const call = document.querySelector('.call')
const showCallButton = document.querySelectorAll('#showCall, #showCall-mobile')
const closeCallButton = document.getElementById('closeCall')
const blurScreen = document.querySelector('.blur')
const body = document.querySelector('body')
let IsVisibleWinwow = false

// ФУНКЦИИ ОТКРЫТИЯ И ЗАКРЫТИЯ FEEDBACK
function showFeedbackFun() {
  feedback.style.display = 'block'
  feedback.style.position = 'fixed'
  blurScreen.style.display = 'block'
  body.style.overflowY = 'hidden'
  IsVisibleWinwow = true
}
showFeedbackButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation()
    showFeedbackFun()
  })
})

function closeFeedbackFun() {
  feedback.style.display = 'none'
  blurScreen.style.display = 'none'
  body.style.overflowY = 'auto'
  IsVisibleWinwow = false
}
closeFeedbackButton.addEventListener('click', function (event) {
  event.stopPropagation()
  closeFeedbackFun()
})

// ФУНКЦИИ ОТКРЫТИЯ И ЗАКРЫТИЯ CALL
function showCallFun() {
  call.style.display = 'block'
  call.style.position = 'fixed'
  blurScreen.style.display = 'block'
  body.style.overflowY = 'hidden'
  IsVisibleWinwow = true
}
showCallButton.forEach((buton) => {
  buton.addEventListener('click', (event) => {
    event.stopPropagation()
    showCallFun()
  })
})

function closeCallFun() {
  call.style.display = 'none'
  blurScreen.style.display = 'none'
  body.style.overflowY = 'auto'
  IsVisibleWinwow = false
}
closeCallButton.addEventListener('click', function (event) {
  event.stopPropagation()
  closeCallFun()
})

// ФУНКЦИЯ ЗАКРЫТИЯ ЭКРАНА ПРИ НАЖАТИИ НЕ НА ФОРМУ
blurScreen.addEventListener('click', function (event) {
  if (IsVisibleWinwow) {
    if (event.target !== feedback && !feedback.contains(event.target)) {
      event.stopPropagation()
      closeFeedbackFun()
    }
    if (event.target !== call && !call.contains(event.target)) {
      event.stopPropagation()
      closeCallFun()
    }
  }
})
