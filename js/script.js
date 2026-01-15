document.addEventListener ('DOMContentLoaded', () => {
    const form = document.getElementById ('contactform');

    if (form) {
        form.addEventListener ('submit', async (e) => {
            e.preventDefault ();
            alert('Thank you for your message! We will get back to you shortly.');
            form.reset ();
        });
    } else {
        console.log('Contact form not found on the page.');
    }
});