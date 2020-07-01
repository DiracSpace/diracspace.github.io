const emailForm = document.querySelector('#email-form');
const modal = document.querySelector('#email');
const personal = '6861636b363332343340676d61696c2e636f6d'

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    Email.send({
        SecureToken: "abc1b022-6cad-4003-b71d-647ffe207d23",
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

function translate(input) {
    var stringinput = input.toString();
    var output = '';
    for (var n = 0; n < stringinput.length; n += 2) {
        output += String.fromCharCode(parseInt(stringinput.substr(n, 2), 16));
    }
    return output;
}