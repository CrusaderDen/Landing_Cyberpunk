const headerBg = document.querySelector("header")

let pictureNumber = 1
const replaceBg = function () {
  pictureNumber++
  headerBg.style.backgroundImage = `url('img/header-bg-large-${pictureNumber}.jpg')`
  if (pictureNumber == "3") {
    pictureNumber = 0
  }
}
setInterval(replaceBg, 5000)
