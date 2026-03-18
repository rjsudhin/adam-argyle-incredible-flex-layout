const rangeScroller = document.querySelector('#range-scroller')
const output = document.querySelector('output')

setupFixedDefault()

rangeScroller.addEventListener('change', (e) => {
  let currentSize = e.target.value // for the layout container layout width
  output.textContent = currentSize
})


function setupFixedDefault() {
  rangeScroller.value = 650
  output.textContent = rangeScroller.value
}

