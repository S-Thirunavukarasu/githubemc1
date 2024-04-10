var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var phoneError = document.getElementById('phone-error')
var subjectError = document.getElementById('subject-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')
function validateName() {
    var name = document.getElementById('name').value
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required'
        return false
    }
    if (!name.match(/^[A-Z a-z]*\s{1}[A-Z a-z]*$/)) {
        nameError.innerHTML = 'Fullname followed by initial'
        return false
    }
    else {
        nameError.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>'
        return true
    }

}
function validatePhone(){
    var phone =document.getElementById('phone').value
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required'
        return false
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone is 10 digits'
        return false
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'phone no is required'
        return false
    }
    else{
        phoneError.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>'
        return true
    }
}
function validateEmail(){
    var email = document.getElementById('email').value
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false
    }
    if (!email.match(/^[A-Z a-z\._\-[0-9]*[@][A-Z a-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Enter Proper email format'
        return false
    }
    else{
        emailError.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>'
        return true
    }
}
function validateSubject(){
    var subject = document.getElementById('subject').value
    var required = 10
    var left = required-subject.length
    if (subject.length == 0) {
        subjectError.innerHTML = 'Subject is required'
        return false
    }
    if(left>0){
        subjectError.innerHTML=left + ' (least 10 characters)'
        return false
    }
    else{
        subjectError.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>'
        return true
    }
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateSubject()){
        submitError.style.display='block'
        submitError.innerHTML='Please fill empty feild'
        setTimeout(function(){
            submitError.style.display='none'
        },3000)
        return false
    }
}
