// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementsByClassName('plinko-ball');
    let startPosition = 0;
    let gravity = 0.5;
    let velocity = 0;

    function fall() {
        velocity += gravity; // Increase the velocity by gravity
        startPosition += velocity; // Move the ball down

        // Check if the ball hits the ground
        if (startPosition > window.innerHeight - ball.offsetHeight) {
            startPosition = window.innerHeight - ball.offsetHeight;
            velocity *= -0.5; // A simple way to create a bounce effect
        }

        ball.style.top = startPosition + 'px';

        requestAnimationFrame(fall); // Continue the animation
    }

    fall(); // Start the animation
});
