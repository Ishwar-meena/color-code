
function randomBackgroundColor() {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let char = ['A', 'B', 'C', 'D', 'E', 'F'];
    let randomBackground = '';
    for (let i = 0; i < 3; i++) {
        let randomNum = num[Math.floor(Math.random() * num.length)];
        let randomChar = char[Math.floor(Math.random() * char.length)];
        randomBackground += randomNum + randomChar;
    }
    return randomBackground;
}
function addBoxes(num) {
    for (let i = 0; i < num; i++) {
        document.querySelector(".container").innerHTML += `<div class="box">
                <div class="color-name">
                    <p></p>
                    <img src="copy.svg" alt="copy" title="copy">
                </div>
            </div>`
    }
}
function setColor() {
    let container = document.querySelectorAll('.container .box'),
        colorName = document.querySelectorAll(".color-name p"),
        copyImg = document.querySelectorAll(".color-name img");

    for (let i = 0; i < container.length; i++) {
        colorName[i].textContent = `#${randomBackgroundColor()}`;
        // console.log(colorName[i].textContent);
        container[i].style.backgroundColor = colorName[i].textContent;
        copyImg[i].addEventListener('click', () => {
            navigator.clipboard.writeText(colorName[i].textContent);
            alert("Copy color code : " + colorName[i].textContent);
        })
    }
}
addBoxes(29);
setColor();
// Infinite scroll: Detect when user reaches bottom of page
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        addBoxes(10);
        setColor();
    }
});





