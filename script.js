const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const circle = document.querySelectorAll('.circle')
const progressBar = document.querySelector('#progress')

currentActive = 1

next.addEventListener('click', (e) => {
  e.preventDefault()
  if (currentActive <= 3) {
    circle[currentActive].classList.add('active')
    progressBar.style.width = `${33*currentActive}%`
    currentActive++
  }
  if (currentActive > 3) {
    next.disabled = true
    next.classList.add('disabled')
  }
  if (currentActive > 1) {
    prev.classList.remove('disabled')
    prev.disabled = false
  }
})

prev.addEventListener('click', (e) => {
  e.preventDefault()
  if (currentActive > 1) {
    circle[currentActive - 1].classList.remove('active')
    progressBar.style.width = `${33* (currentActive-2)}%`
    currentActive--
  }
  if (currentActive < 2) {
    prev.disabled = true
    prev.classList.add('disabled')
  }
  if (currentActive <= 3) {
    next.classList.remove('disabled')
    next.disabled = false
  }

})