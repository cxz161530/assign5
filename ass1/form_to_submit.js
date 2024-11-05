//using mapping function to make the selections for package
const packages = ["Bronze", "Silver", "Gold", "Platinum"];

const packageSelect = document.getElementById("package");

packages.map(package => {
    const option = document.createElement("option");
    option.value = package;
    option.textContent = package;
    packageSelect.appendChild(option);
});

document.getElementById("subscriptionForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const package = packageSelect.value; // Updated to use the dynamic package select
    const subscribe = document.getElementById("subscribe").checked;

    let isValid = true;
    let messages = [];

    // Validate First Name
    const letterCount = Array.from(firstName)
    .filter(char => /[A-Za-z]/.test(char)) 
    .length; 
    if (letterCount < 2) {
        isValid = false;
        messages.push("First Name must contain at least 2 alphabetic characters.");
    } else {

    }

    // Validate Last Name
    const letterCountL = Array.from(lastName)
    .filter(char => /[A-Za-z]/.test(char)) 
    .length; 
    if (letterCountL < 2) {
        isValid = false;
        messages.push("Last Name must contain at least 2 alphabetic characters.");
    } else {

    }

    // Validate Email
    function isValidEmail(email) {
        if (!email) return true; // Email is optional
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    
    if (!isValidEmail(email)) {
        isValid = false;
        messages.push("Please enter a valid email address.");
    }
    

    // Validate Package Selection
    if (!package) {
        isValid = false;
        messages.push("Please select a package.");
    }

    // Validate Subscription Checkbox
    if (!subscribe) {
        isValid = false;
        messages.push("You must subscribe to the newsletter.");
    }

    // Display Results
    const resultDiv = document.getElementById("result");
    if (!isValid) {
        resultDiv.innerHTML = messages.join("<br>");
    } else {
        resultDiv.innerHTML = `Thank you, ${firstName} ${lastName}, for subscribing!<br>Your email ${email} is registered with our ${package} package.`;
        document.getElementById("subscriptionForm").style.display = 'none';
    }
});
