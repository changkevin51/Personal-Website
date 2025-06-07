document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm.querySelector('.form-submit');
    const submitText = submitButton.querySelector('.submit-text');
    const submitLoading = submitButton.querySelector('.submit-loading');
    const formStatus = document.getElementById('form-status');
    const returnHomeBtn = document.getElementById('return-home-btn');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        submitText.style.display = 'none';
        submitLoading.style.display = 'inline-flex';
        submitButton.disabled = true;
        formStatus.style.display = 'none';

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.innerHTML = '<div class="success-message">✅ Message sent successfully! Thank you for reaching out.</div>';
                formStatus.style.display = 'block';
                contactForm.reset();
            } else {
                formStatus.innerHTML = '<div class="error-message">❌ Something went wrong. Please try again.</div>';
                formStatus.style.display = 'block';
            }
        } catch (error) {
            formStatus.innerHTML = '<div class="error-message">❌ Network error. Please check your connection and try again.</div>';
            formStatus.style.display = 'block';
        } finally {
            submitText.style.display = 'inline';
            submitLoading.style.display = 'none';
            submitButton.disabled = false;
        }
    });

    if (returnHomeBtn) {
        returnHomeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.body.classList.add('page-exit');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 300);
        });
    }

    const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});