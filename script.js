// Get DOM elements
const train = document.getElementById('train');
const message = document.getElementById('message');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let animationInterval;
let currentPosition = parseInt(train.style.left) || 0; // Start position outside the left boundary

// Function to start the animation
function startAnimation() {
    message.textContent = 'Animation is running';
    currentPosition = 0; // Reset position to outside the left boundary
    train.style.left = currentPosition + 'px';
    animationInterval = setInterval(moveTrain, 10);
}

// Function to stop the animation
function stopAnimation() {
    message.textContent = 'Animation is stopped';
    clearInterval(animationInterval);
}

// Function to move the train
function moveTrain() {
    currentPosition += 1; // Adjust the speed by changing the increment
    train.style.left = currentPosition + 'px';

    // Check if the train has reached the right end
    if (currentPosition >= window.innerWidth) {
        clearInterval(animationInterval);
        message.textContent = 'Animation is complete';
    }
}

// Add click event listeners to buttons
startButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);

