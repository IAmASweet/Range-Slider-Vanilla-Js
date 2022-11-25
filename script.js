const range = document.querySelector(".range-track")


const rangeProcess = (e) => {
  const value = e.target.value
  const label = e.target.nextElementSibling
  label.textContent = `${value}px`
  const title = document.querySelector('.title')
  title.style.fontSize = `${value}px`
}

range.addEventListener('input', rangeProcess)