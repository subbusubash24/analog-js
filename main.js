var smallBar = document.querySelector(".small-bar-holder")
var largeBar = document.querySelector(".large-bar-holder")
var dial = document.querySelector(".dial")
let angle = 6
var generateBtn = document.querySelector(".generate-btn")

for (let i = 2; i <= 29; i++) {
    angle = angle + 6
    var newBar = document.createElement("div")

    if (i % 5 == 0) {
        newBar.setAttribute("class", "large-bar-holder")

        // console.(newBar);

        newBar.innerHTML = largeBar.innerHTML


        newBar.style.transform = "rotate(" + angle + "deg)"

        dial.appendChild(newBar)
    } else {
        newBar.setAttribute("class", "small-bar-holder")


        newBar.innerHTML = smallBar.innerHTML


        newBar.style.transform = "rotate(" + angle + "deg)"

        dial.appendChild(newBar)
    }
}
var minHnd=document.querySelector(".min-hand-holder")
var hourHnd=document.querySelector(".hour-hand-holder")
console.log(hourHnd);
function action(){
    var min=Math.floor(Math.random()*60);
    let minAngle=(min*6)
    minHnd.style.transform="rotate("+minAngle+"deg)" 
    
    var hour=Math.floor(Math.random()*12)
    var hourAngle=((hour*60)+min)*0.5;
    hourHnd.style.transform="rotate("+hourAngle+"deg)" 

}


generateBtn.addEventListener("click",action)
