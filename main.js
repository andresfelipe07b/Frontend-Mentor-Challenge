const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email || !email.includes('@')) {
        emailInput.classList.add('input-error');
        errorMessage.style.display = 'block';
    } else {
        emailInput.classList.remove('input-error');
        errorMessage.style.display = 'none';
        form.reset();
        window.location.href = `./pages/success.html?email=${encodeURIComponent(email)}`

    }


});
