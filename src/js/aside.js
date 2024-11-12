const aside = document.querySelector('.aside')
const showAside = document.getElementById('menuIcon')
const closeAside = document.getElementById('closeAside')
const blurScreen = document.querySelector('.blurAside')
const body = document.querySelector('body')
let IsVisibleWinwow = false

function showAsideFun() {
  aside.style.display = 'block'
  aside.style.position = 'fixed'
  aside.style.zIndex = 4
  blurScreen.style.display = 'block'
  body.style.overflowY = 'hidden'
  IsVisibleWinwow = true
}
showAside.addEventListener('click', function (event) {
  event.stopPropagation()
  showAsideFun()
})

function closeAsideFun() {
  aside.style.display = 'none'
  blurScreen.style.display = 'none'
  body.style.overflowY = 'auto'
  IsVisibleWinwow = fasle
}
closeAside.addEventListener('click', function (event) {
  event.stopPropagation()
  closeAsideFun()
})

// ФУНКЦИЯ ЗАКРЫТИЯ ЭКРАНА ПРИ НАЖАТИИ НЕ НА ASIDE
blurScreen.addEventListener('click', function (event) {
  if (IsVisibleWinwow) {
    if (event.target !== aside && !aside.contains(event.target)) {
      event.stopPropagation()
      closeAsideFun()
    }
  }
})

function asideResize() {
  const screenWidth = window.innerWidth

  if (screenWidth >= 1366) {
    aside.style.display = 'block'
    aside.style.position = 'sticky'
  } else {
    closeAsideFun()
  }
}

window.addEventListener('resize', asideResize)
