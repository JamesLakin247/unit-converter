const answerPara = document.getElementsByClassName("answer-para")
const ansPara = document.getElementById("ans-para")
const userInput = document.getElementsByClassName("user-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("dblclick", function() {
    let ans = "hell0"
    ansPara.innerHTML += `<p>${ans}</p>`
})
