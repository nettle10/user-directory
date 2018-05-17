const form = document.querySelector("#userForm")

function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = "6rem"
    colorDiv.style.height = "3rem"
    return colorDiv
}

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
        item.appendChild(value)
    } catch(e) {
        item.textContent += value 
    }
    return item
}
const handleSubmit = function(ev){
    ev.preventDefault()
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value

    const users = document.querySelector('#users')

    const list = document.createElement('ul')

    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '

    colorItem.appendChild(renderColor(favoriteColor))

    list.appendChild(renderListItem('Name', userName))
    list.appendChild(renderListItem('Age', age))
    list.appendChild(colorItem)

    users.appendChild(list)

    f.reset()
    f.userName.focus()
}

form.addEventListener("submit", handleSubmit)

