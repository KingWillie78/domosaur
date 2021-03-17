document.querySelector('.mess-with-me').style.fontSize = '40px'
document.querySelector('p.mess-with-me').style.backgroundColor = 'green'
document.querySelector('#hide-me-area').style.display = 'none'
document.querySelector('#triceratops').style.width = '324px'

const messWithGrabber = document.querySelector('.mess-with-me')
messWithGrabber.addEventListener('click', changeFont)

function changeFont() {
    messWithGrabber.style.color = 'orange';
}

const dino = document.querySelector('#triceratops')
dino.addEventListener('click', createBorder)
function createBorder() {
    dino.style.border = 'red solid 4px'
}

const feathers = document.querySelector('#feathers')
feathers.addEventListener('click', makeTransparent)
function makeTransparent() {
    feathers.style.opacity = '0.5'
}

const toggler = document.querySelector('#toggle')
toggler.addEventListener('click', makeToggle)
function makeToggle() {
document.querySelector('#row').style.backgroundColor = 'pink'
}

const larger = document.querySelector('#biggify')
larger.addEventListener('mouseover', makeLarger)
function makeLarger() {
larger.style.width = '200px'
}

const notHovered = document.querySelector('#biggify')
notHovered.addEventListener('mouseout', makeSmaller)
function makeSmaller() {
larger.style.width = '150px'
}