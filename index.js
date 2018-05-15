const button = document.querySelector('button.greeting')
function changeText(ev){
    const greeting = document.querySelector('h1.lit')
    greeting.textContent = 'for real though'
}

button.addEventListener("click", changeText)
