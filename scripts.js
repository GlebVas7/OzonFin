const progressInput = document.getElementById('progress-input');
const animateCheckbox = document.getElementById('animate-checkbox');
const hideCheckbox = document.getElementById('hide-checkbox');
const progressCircle = document.getElementById('progress-circle');

let animationInterval;

function updateProgress() {
    const value = Number(progressInput.value);
    progressCircle.style.setProperty('--progress', `${value * 3.6}deg`);
}

function toggleAnimation() {
    if (animateCheckbox.checked) {
        let value = 0;
        animationInterval = setInterval(() => {
            value = (value + 1) % 101;
            progressInput.value = value;
            updateProgress();
        }, 50);
    } else {
        clearInterval(animationInterval);
    }
}

function toggleVisibility() {
    if (hideCheckbox.checked) {
        progressCircle.style.opacity = '0';
    } else {
        progressCircle.style.opacity = '1';
    }
}


progressInput.addEventListener('input', updateProgress);
animateCheckbox.addEventListener('change', toggleAnimation);
hideCheckbox.addEventListener('change', toggleVisibility);

updateProgress();
