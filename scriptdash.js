document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    const countElement = document.getElementById('count');
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    incrementButton.addEventListener('click', function() {
        count++;
        countElement.innerText = count;
    });

    decrementButton.addEventListener('click', function() {
        count--;
        countElement.innerText = count;
    });
});