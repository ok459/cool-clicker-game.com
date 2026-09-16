
const button = document.getElementById("clickMe")
const text = document.getElementById("text")
const mutiplyerEl = document.getElementById("mutiplyer")
const reset = document.getElementById("reset")
let score = 0
let mutiplyer = 1
let goal = 10
text.innerText = score;
mutiplyerEl.innerText = "current mutiplyer " + mutiplyer;
button.addEventListener('click', () => {
    score += 1 * mutiplyer;
    text.innerText = score;
    if (score >= goal){
        mutiplyer += 1
        mutiplyerEl.innerText = "current mutiplyer " + mutiplyer;
        goal *= 2
    }
});
reset.addEventListener('click', () =>{
    score = 0
    text.innerText = score;
    mutiplyer = 1
    mutiplyerEl.innerText = "current mutiplyer " + mutiplyer;
});
