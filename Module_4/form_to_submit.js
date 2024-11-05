       
function FormValidation() {
    //validate from contain required and correct information before submit
    //1. Validate both first and last name
    var firstName = document.getElementById('firstName').value;
    if(firstName.length<2 || !/^[a-zA-Z]+$/.test(firstName)){
        alert('First Name have to be 2 characters and contain only alphabetic characters')
        displayError('firstName', 'First Name have to be 2 characters and contain only alphabetic characters');
        return false;
         }
    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 2 || !/^[a-zA-Z]+$/.test(lastName)) {
        displayError('lastName', 'Last Name have to be 2 characters and contain only alphabetic characters');
        return false;
        }
        //Validate facilitator
    var facilitator = document.getElementById('facilitator').value;
    var validFacilitators = ["Jen", "Behdad", "Chris", "Christian", "Josh"];
    if (!validFacilitators.includes(facilitator)) {
        displayError('facilitator', 'Invalid facilitator. Please choose from: Jen, Behdad, Chris, Christian, Josh.');
        return false;
        }
    return true
}

function resetErrors() {
    // reset error message
    var errorElements = document.getElementsByClassName('error-message');
    Array.from(errorElements).forEach(function (element) {
        element.innerHTML = '';
    });
}

function displayError(fieldName, errorMessage) {
    //display error message
    var errorElement = document.getElementById(fieldName + '-error');
    if (errorElement) {
        errorElement.innerHTML = errorMessage;
    }
}


