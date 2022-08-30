function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email-id').value
    let phoneNumber = document.getElementById('phone-number').value
    let batchInput = document.getElementById('batch-input').value
    let currentInput = document.getElementById('current-module').value
    let tnCInput = document.getElementById('tnC-input').checked

    let error = false

    if(firstNameInput.length >= 3){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }else{
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('first-name-invalid').style.display = 'block'
        error = true
    }
    if(lastNameInput.length >= 3){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }else{
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'block'
        error = true
    }
    if(emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf('@') !== 0
        ){
        document.getElementById('email-id-valid').style.display = 'block'
        document.getElementById('email-id-invalid').style.display = 'none'
    }else{
        document.getElementById('email-id-valid').style.display = 'none'
        document.getElementById('email-id-invalid').style.display = 'block'
        error = true
    }
    if(phoneNumber && phoneNumber.length === 10 && parseInt(phoneNumber)){
        document.getElementById('phone-number-valid').style.display = 'block'
        document.getElementById('phone-number-invalid').style.display = 'none'
    }else{
        document.getElementById('phone-number-valid').style.display = 'none'
        document.getElementById('phone-number-invalid').style.display = 'block'
        error = true
    }
    if(batchInput !== 'None' && parseInt(batchInput)){
        document.getElementById('batch-valid').style.display = 'block'
        document.getElementById('batch-invalid').style.display = 'none'
    }else{
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('batch-invalid').style.display = 'block'
        error = true
    }
    if(currentInput !== 'None' && parseInt(currentInput)){
        document.getElementById('current-module-valid').style.display = 'block'
        document.getElementById('current-module-invalid').style.display = 'none'
    }else{
        document.getElementById('current-module-valid').style.display = 'none'
        document.getElementById('current-module-invalid').style.display = 'block'
        error = true
    }
    if(tnCInput){
        document.getElementById('tnC-invalid').style.display = 'none'
    }else{
        document.getElementById('tnC-invalid').style.display = 'block'
        error = true
    }

    if(!error){
        alert('Your details have been saved successfully!')
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email-id').value = ''
        document.getElementById('phone-number').value = ''
        document.getElementById('batch-input').value = 'None'
        document.getElementById('current-module').value = 'None'
        document.getElementById('tnC-input').checked = false

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-id-valid').style.display = 'none'
        document.getElementById('phone-number-valid').style.display = 'none'
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('current-module-valid').style.display = 'none'
    }
}