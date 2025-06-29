let messageBtn = document.getElementById("messageBtn");

let firstClick = true
let messageBox = document.getElementById("messageBox");

messageBtn.addEventListener("click", () => {
    if (firstClick){
        firstClick = !firstClick;
        messageBox.innerHTML = "Seja muito bem-vindo!"
    }
    else{
        messageBox.innerHTML = "O passo mais importante em qualquer jornada é sempre o primeiro."
    }
})