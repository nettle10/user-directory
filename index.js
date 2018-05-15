const button = document.querySelector('button.greeting')
function changeText(){
    const greeting = document.querySelector('p.greeting')
    greeting.textContent = 'You done clicked'
}

button.addEventListener("click", changeText)
