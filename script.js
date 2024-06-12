document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const interests = document.getElementById('interests');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const interestsError = document.getElementById('interestsError');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    interestsError.textContent = '';

    // Name validation
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
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
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }

    // Learning interests validation
    if (interests.value.trim() === '') {
        interestsError.textContent = 'Learning interests are required';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful');
    }
});
