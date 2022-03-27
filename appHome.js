
buttonForm.addEventListener('click', submit)

function submit() {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    return firstName != '' && lastName != '' && email != '' && password != '' ? submitForm(firstName, lastName, email, password) : alert('[ERROR] preencha todos os campos')

}