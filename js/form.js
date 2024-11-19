//contact form


const form = document.querySelector('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const messageField = document.getElementById('message');
const errorTexts = document.querySelectorAll('.error-text');
const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
const toggleErrorText = toggleSwitch.nextElementSibling.nextElementSibling;


// function error-text
function showError(inputField, errorText, message) {
    errorText.innerText = message;
    errorText.style.display = 'block';
    inputField.style.borderColor = 'red';
}

function hideError(inputField, errorText) {
    errorText.style.display = 'none';
    inputField.style.borderColor = '#bf8924';
}



// "name" validation
function validateName() {
    const nameError = nameField.nextElementSibling; 
    if (nameField.value.trim() === '') {
        showError(nameField, nameError, 'Veuillez écrire votre nom.');
        return false;
    } else {
        hideError(nameField, nameError);
        return true;
    }
}

// "Email" validation
function validateEmail() {
    const emailError = emailField.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(emailField.value.trim())) {
        showError(emailField, emailError, "L'adresse email n'est pas valide.");
        return false;
    } else {
        hideError(emailField, emailError);
        return true;
    }
}

// "phone" validation
function validatePhone() {
    const phoneError = phoneField.nextElementSibling;
    const phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(phoneField.value.trim())) {
        showError(phoneField, phoneError, 'Le numéro de téléphone doit comporter 10 chiffres.');
        return false;
    } else {
        hideError(phoneField, phoneError);
        return true;
    }
}

// "Message" validation
function validateMessage() {
    const messageError = messageField.nextElementSibling;
    if (messageField.value.trim() === '') {
        showError(messageField, messageError, 'La zone "Votre message" est vide.');
        return false;
    } else {
        hideError(messageField, messageError);
        return true;
    }
}

// toggle validation
function validateToggleSwitch() {
    const toggleSwitch = document.getElementById('flexSwitchCheckDefault'); 
    const toggleErrorText = document.querySelector('.toggle-error'); 
    
    if (!toggleSwitch.checked) {
        toggleErrorText.style.display = 'block'; 
        return false;
    } else {
        toggleErrorText.style.display = 'none'; 
        return true;
    }
}





// validation function
function validateForm(event) {
    event.preventDefault(); 

    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();
    const isToggleSwitchValid = validateToggleSwitch();

    
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid && isToggleSwitchValid) {
        displayPopup();
        form.reset(); 
        document.querySelector('.toggle-error').style.display = 'none'; 
    } 
} 


// validation popup
function displayPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; 
}

// close popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}




const contactForm = document.querySelector('form');
form.addEventListener('submit', validateForm);





