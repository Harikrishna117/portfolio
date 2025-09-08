document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            const contactMessage = document.getElementById('contact-message');

            // Validate phone number (10 digits)
            const phonePattern = /^[0-9]{10}$/;
            const isPhoneValid = phonePattern.test(phone);

            // Validate all fields
            if (name && email && phone && message && isPhoneValid) {
                contactMessage.innerHTML = `<p style="color: green;">Thank you, ${name}! Your message has been sent.</p>`;
                form.reset();
            } else {
                let errorMessage = 'Please fill in all fields correctly.';
                if (!isPhoneValid && phone) {
                    errorMessage = 'Please enter a valid 10-digit phone number.';
                }
                contactMessage.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
            }
        });
    }
});