const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zipCode");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const form = document.querySelector("form");

[email, country, zipCode, password, passwordConfirm].forEach(e => {
    e.addEventListener('blur', () => e.reportValidity())
})

zipCode.addEventListener('blur', e => {
    if (zipCode.validity.patternMismatch) {
        zipCode.setCustomValidity("Must be a valid ZIP Code.");
    }
    else {
        zipCode.setCustomValidity("");
    }
})

passwordConfirm.addEventListener('blur', e => {
    if (password.value == passwordConfirm.value) {
        passwordConfirm.setCustomValidity("");
    }

    else {
        passwordConfirm.setCustomValidity("Passwords must match")
    }
})