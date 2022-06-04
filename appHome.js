
buttonForm.addEventListener('click', submit)

function submit() {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    return firstName != '' && lastName != '' && email != '' && password != '' ? register(firstName, lastName, email, password) : alert('[ERROR] preencha todos os campos')

}

export default function register(firstName, lastName, email, password) {
    const register = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    return (
        register
    )
}