const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
const colors = ['#05dceb','#e863f2', '#e01f12', '#e314e3', '#03d690','#bd0802','#fff703','#ff7a05','#ff0026','#ff00dd','#03ff1c','#ff8503','#1003ff','#ff0703','#74ff03','#ecff41','#41ff67','#ff4b41','#ff41ec']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}