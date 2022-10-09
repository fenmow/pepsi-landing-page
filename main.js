function change($img, $color) {
  let img = document.querySelector('.main_image')
  let body = document.querySelector('body')
  img.src = $img;
  body.style.background = $color
}