document.getElementById('submitBtn').addEventListener('click', (e)=> {
    document.getElementById('nameError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    let isValid = true;

    const CorectName =/^.+$/;
    if (!CorectName.test(name)) {
        document.getElementById('nameError').innerText = 'Неверное имя';
        isValid = false;
    }

    const CorectMessage = /^.{5,}$/;
    if(!CorectMessage.test(message)) {
        document.getElementById('messageError').innerText = 'Неверное сообщение';
        isValid = false;
    }

    const CorectPhone = /^\+380\d+$/;
    if (!CorectPhone.test(phone)) {
        document.getElementById('phoneError').innerText = 'Неверный номер';
        isValid = false;
    }

    const CorectEmail = /.+@.+\..+/
    if(!CorectEmail.test(email)) {
        document.getElementById('emailError').innerText = 'Неверная почта';
        isValid = false;
    }

    if(isValid){
        console.log( name + ' '+ message + ' ' + phone + ' ' + email );
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';

    }  

});