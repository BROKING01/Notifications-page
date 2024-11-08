const submit = document.querySelector(".submit")
const num = document.querySelector(".me")
const num1 = document.querySelector(".you")
const mark = document.querySelector(".mark")
const angela = document.querySelector(".angela")
const jacob = document.querySelector(".jacob")

submit.onclick = function() {
    mark.classList.remove("unread")
    angela.classList.remove("unread")
    jacob.classList.remove("unread")
    mark.style.backgroundColor = "transparent"
    angela.style.backgroundColor = "transparent"
    jacob.style.backgroundColor = "transparent"
    num.style.display = "none"
    num1.classList.remove("hidden")
}