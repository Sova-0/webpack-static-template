const readMoreButtonService = document.getElementById(
  'read-more__button-service'
)
const service__list = document.querySelector('.service__list')
const changeTextReadMoreService = document.getElementById(
  'read-more__button-text-service'
)

function showReadMoreServiceFun() {
  service__list.classList.toggle('service__list--visible')
  changeTextReadMoreService.classList.toggle('read-more__button-text--rot')
  if (service__list.classList.contains('service__list--visible')) {
    changeTextReadMoreService.textContent = 'Скрыть'
  } else {
    changeTextReadMoreService.textContent = 'Показать все'
  }
}
readMoreButtonService.addEventListener('click', showReadMoreServiceFun)

const readMoreButtonBrands = document.getElementById('read-more__button-brands')
const brands__list = document.querySelector('.brands__list')
const changeTextReadMoreBrands = document.getElementById(
  'read-more__button-text-brands'
)
function showReadMoreBrandsFun() {
  brands__list.classList.toggle('brands__list--visible')
  changeTextReadMoreBrands.classList.toggle('read-more__button-text--rot')
  if (brands__list.classList.contains('brands__list--visible')) {
    changeTextReadMoreBrands.textContent = 'Скрыть'
  } else {
    changeTextReadMoreBrands.textContent = 'Показать все'
  }
}
readMoreButtonBrands.addEventListener('click', showReadMoreBrandsFun)

const readMoreButtonUppage = document.getElementById('read-more__button-uppage')
const uppageMainText = document.querySelector('.main__text')
const changeTextReadMoreUppage = document.getElementById(
  'read-more__button-text-uppage'
)
function showReadMoreUppageFun() {
  uppageMainText.classList.toggle('main__text--visible')
  changeTextReadMoreUppage.classList.toggle('read-more__button-text--rot')
  if (uppageMainText.classList.contains('main__text--visible')) {
    changeTextReadMoreUppage.textContent = 'Скрыть'
  } else {
    changeTextReadMoreUppage.textContent = 'Читать далее'
  }
}
readMoreButtonUppage.addEventListener('click', showReadMoreUppageFun)
