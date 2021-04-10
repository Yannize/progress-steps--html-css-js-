const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const circles = document.querySelectorAll('.circle')
const progressBar = document.querySelector('#progress')

currentActive = 1

next.addEventListener('click', (e) => {
  //increment currentActive by 1 while pressing Next, until reached max number of circle
  if (currentActive < circles.length) {
    currentActive++
  }

  update()

})

//decrement currentActive by 1 while pressing Prev, until reached 1 (min number of circle)
prev.addEventListener('click', (e) => {
  if (currentActive > 1) {
    currentActive--
  }

  update()

})


// function to update state of circles | progress bar | buttons
function update() {

  // add/remove blue color of circles
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // count all colored circles
  let activeCircles = document.querySelectorAll('.circle.active')
  // change width of progress bar : (number of space between active circle(s)) / (number of total spaces) * 100 %
  progressBar.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%'

  // disable or not Button if we reached start or end of the progress bar
  if (currentActive === 1) {
    prev.disabled = true
    prev.classList.add('disabled')
  } else if (currentActive === 6) {
    next.disabled = true
    next.classList.add('disabled')
  } else {
    next.disabled = false
    next.classList.remove('disabled')
    prev.disabled = false
    prev.classList.remove('disabled')
  }
}