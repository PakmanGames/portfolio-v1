function sendMail() {
    let contents = {
        email: document.querySelector(".email").value,
        subject: document.querySelector(".subject").value,
        message: document.querySelector(".message-box").value,        
    }

    emailjs.send(keys.service, keys.template, contents);
}

const sendMailButton = document.querySelector(".send-mail");

sendMailButton.addEventListener("click", () => {
    if (document.querySelector(".email").value !== "" && 
        document.querySelector(".subject").value !== "" &&
        document.querySelector(".message-box").value !== "") {
        sendMail();
    } else {
        const warning = document.querySelector(".warning");
        warning.style.color = "red";
        warning.textContent = "Mail not sent, one or more fields are blank";
    }
});

sendMailButton.addEventListener("mousedown", () => sendMailButton.classList.add("pressed"));
sendMailButton.addEventListener("mouseup", () => sendMailButton.classList.remove("pressed"));