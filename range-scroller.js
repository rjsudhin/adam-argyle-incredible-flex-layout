const rangeScroller = document.querySelector('#range-scroller')
const output = document.querySelector('output')
const layoutContainer = document.querySelector('.layout-container')

setupFixedDefault()

rangeScroller.addEventListener('input', (e) => {
  let currentSize = e.target.value // for the layout container layout width
  output.textContent = currentSize
  layoutContainer.style.width = `${currentSize}px`
})


function setupFixedDefault() {
  let defaultValue = 650
  rangeScroller.value = defaultValue
  output.textContent = rangeScroller.value
  layoutContainer.style.width = `${defaultValue}px`
}

