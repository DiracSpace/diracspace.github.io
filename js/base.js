// email functionality
const emailForm = document.querySelector('#email-form');
const modal = document.querySelector('#email');
const personal = '6861636b363332343340676d61696c2e636f6d'
const token = '61626331623032322d366361642d343030332d623731642d363437666665323037643233'

// event listeners 
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    Email.send({
        SecureToken: translate(token),
        To: translate(personal),
        From: emailForm['email-from'].value,
        Subject: emailForm['email-subject'].value,
        Body: emailForm['email-body'].value,
    }).then(
        M.toast({ html: '¡Correo enviado!', classes: 'rounded' })
    );
    M.Modal.getInstance(modal).close();
    emailForm.reset();
});

document.addEventListener("DOMContentLoaded", (e) => {
    var windowWidth = window.screen.width;
    var windowHeight = window.screen.height;

    console.log("Width: " + windowWidth + ", height: " + windowHeight);
    if (windowWidth >= 600) {
        document.getElementById("certificate-display").style.width = '100%';
        document.getElementById("certificate-display").style.height = '75%';
    }
});

// functions
function translate(input) {
    var stringinput = input.toString();
    var output = '';
    for (var n = 0; n < stringinput.length; n += 2) {
        output += String.fromCharCode(parseInt(stringinput.substr(n, 2), 16));
    }
    return output;
}

// navigation events
document.getElementById("floating-btn").addEventListener("click", (e) => {
    $('.start-of-page').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("me-nav").addEventListener("click", (e) => {
    $('.about').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("me-sidenav").addEventListener("click", (e) => {
    $('.about').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("languages-nav").addEventListener("click", (e) => {
    $('.languages').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("languages-sidenav").addEventListener("click", (e) => {
    $('.languages').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("projects-nav").addEventListener("click", (e) => {
    $('.projects').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("projects-sidenav").addEventListener("click", (e) => {
    $('.projects').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("certificates-nav").addEventListener("click", (e) => {
    $('.certificates').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});

document.getElementById("certificates-sidenav").addEventListener("click", (e) => {
    $('.certificates').animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
});