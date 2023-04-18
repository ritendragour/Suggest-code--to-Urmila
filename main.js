let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let navbar = document.querySelector("nav")
let body = document.querySelector("body")
let clrBtn = document.querySelector('#clear')
form.addEventListener("submit", savedata)

function savedata(e) {
    e.preventDefault()

    const newLi = document.createElement("li")
    newLi.innerText = input.value
    newLi.className = "list-group-item rounded-0"

    const dltbtn = document.createElement("button")
    dltbtn.className = "btn btn-warning btn-sm float-end rounded-20"
    dltbtn.innerText = "Delete"

    newLi.appendChild(dltbtn)
    ul.appendChild(newLi)
    form.reset()
}
function dltTodo(e) {
    if (e.target.className.includes('btn-warning')) {
        let li = e.target.parentElement
        ul.removeChild(li)
    }
}

ul.addEventListener('click', dltTodo)


function clrTodo(e) {

    location.reload();

}



clrBtn.addEventListener('click', clrTodo)


