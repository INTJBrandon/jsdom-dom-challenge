document.addEventListener("DOMContentLoaded", function() {
    startTimer()
});

function startTimer() {
    seconds = window.setInterval(timer, 1000);
}

const counter = document.querySelector("#counter");
let numberCount = parseInt(counter.innerText);
const pause = document.querySelector("#pause");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const like = document.querySelector(".likes");
const form = document.querySelector("#comment-form");
const input = document.querySelector("#comment-input");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const p = document.createElement("p")
    const div = document.getElementById("list")
    p.innerText = input.value
    div.append(p)
    form.reset();
});

pause.addEventListener('click', function(){
    if (pause.innerText === "pause"){
        clearInterval(seconds);
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pause.innerText = "resume";


    } else if (pause.innerText === "resume") {
        seconds = window.setInterval(timer, 1000);
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        pause.innerText = "pause";

    }   
});

minus.addEventListener('click', function() {
    numberCount--;
    counter.innerHTML = numberCount;
});

plus.addEventListener('click', function() {
    numberCount++;
    counter.innerHTML = numberCount;
})



heart.addEventListener('click', function(e) {
    let li = document.createElement('li');
    console.log(e)
    li.innerHTML = numberCount + " has been liked"
    like.appendChild(li);
});

function timer() {
        numberCount += 1
        counter.innerText = numberCount
}


