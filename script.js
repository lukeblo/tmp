// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const button = document.getElementById('getStarted');

    // Add click event listener
    button.addEventListener('click', () => {
        // Show alert as simple demo interaction
        alert('Welcome! Ready to get started?');

        // Optional: Add clicked animation class
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 600);

        // Log for debugging
        console.log('Get Started button clicked');

        // Future: Add navigation logic here
        // window.location.href = '/dashboard';
    });

    // Optional: Trigger entrance animation
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('fade-in');
    }
});
