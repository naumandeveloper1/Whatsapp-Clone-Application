let whatsapp = document.querySelector(".whatsapp");
let header = document.querySelector(".header");
let main = document.querySelector(".main");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let messageinput = document.querySelector(".messageinput");
let sendbtn = document.querySelector(".sendbtn");
let showmessage = document.querySelector(".showmessage");


class whatsappclone {
    constructor(message) {
        this.message = message;

    }
    showmessageonscreen() {

        // console.log(right);
        // console.log("hello" + this.message);
        let createbox = document.createElement("div");
        let text = document.createTextNode(this.message);
        createbox.setAttribute("class", "div w-50 mx-4")
        createbox.setAttribute("style", "background: green; color: white; border-radius: 20px; padding: 10px 30px!important;");
        createbox.appendChild(text);
        showmessage.appendChild(createbox);
        messageinput.value = '';

    }
}

sendbtn.addEventListener("click", () => {

    // console.log(messageinput.value);

    if (messageinput.value.length > 0) {
        let first = new whatsappclone(messageinput.value);
        first.showmessageonscreen();
    }
    else {
        alert(messageinput.value);
    }

})


messageinput.addEventListener("keyup", (e) => {

    // console.log(messageinput.value);
    // let key = e.keyCode;
    // console.log("hello", e.keyCode);
    if (messageinput.value.length > 0) {
        if (e.keyCode == 13) {
            let first = new whatsappclone(messageinput.value);
            first.showmessageonscreen();
        }
    }

    else {
        alert("First enter some text then you send message.");

    }

})
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 27) {
        window.close();
    }
})