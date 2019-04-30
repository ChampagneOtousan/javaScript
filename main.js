function lightTheme() {
  document.body.style.backgroundColor = '#fff'
  document.body.style.color = '#333'

}

function darkTheme() {
  document.body.style.backgroundColor = 'black'
  document.body.style.color = 'white'
}
function sepiaTheme() {
  document.body.style.backgroundColor = '#cc9d68'
  document.body.style.color = '#333'
}

function turnPage() {
  let screen = document.getElementById('screen')
  screen.classList.add('page')
}
