document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (email) {
        document.getElementById('userEmail').textContent = email;
    }else{
        document.getElementById('userEmail').textContent = "ash@loremcompany.com"
    }
});
