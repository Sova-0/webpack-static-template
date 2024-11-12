const aside = document.querySelector('.aside')
const showAside = document.getElementById('menuIcon')
const closeAside = document.getElementById('closeAside')
const blurScreen = document.querySelector('.blur')
let IsVisibleWinwow = false

function showAsideFun() {
  aside.style.display = 'block'
  aside.style.position = 'fixed'
  aside.style.zIndex = 4
  blurScreen.style.display = 'block'
  IsVisibleWinwow = true
}
showAside.addEventListener('click', function (event) {
  event.stopPropagation()
  showAsideFun()
})

function closeAsideFun() {
  aside.style.display = 'none'
  blurScreen.style.display = 'none'
  IsVisibleWinwow = fasle
}
closeAside.addEventListener('click', function (event) {
  event.stopPropagation()
  closeAsideFun()
})

// ФУНКЦИЯ ЗАКРЫТИЯ ЭКРАНА ПРИ НАЖАТИИ НЕ НА ASIDE
document.body.addEventListener('click', function (event) {
  if (IsVisibleWinwow) {
    if (event.target !== aside && !aside.contains(event.target)) {
      closeAsideFun()
    }
  }
})
