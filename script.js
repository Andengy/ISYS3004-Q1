document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    const firstName = document.getElementById('firstName');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const interests = document.getElementById('interests');

    const firstNameError = document.getElementById('firstNameError');
    const surnameError = document.getElementById('surnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const interestsError = document.getElementById('interestsError');

    // Clear previous error messages
    firstNameError.textContent = '';
    surnameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    interestsError.textContent = '';

    // First name validation
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First name is required';
        isValid = false;
    }

    // Surname validation
    if (surname.value.trim() === '') {
        surnameError.textContent = 'Surname is required';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    // Password validation
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    }

    // Learning interests validation
    if (interests.value.trim() === '') {
        interestsError.textContent = 'Learning interests are required';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful');
        // Here you could also submit the form or send the data to a server
    }
});
