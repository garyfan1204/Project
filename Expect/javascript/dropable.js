document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.opt');
    const answers = document.querySelectorAll('.ans');

    options.forEach(option => {
        option.addEventListener('dragstart', dragStart);
    });

    answers.forEach(answer => {
        answer.addEventListener('dragover', dragOver);
        answer.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.innerText);
        e.dataTransfer.effectAllowed = 'move';
    }

    function dragOver(e) {
        e.preventDefault(); // Prevent default to allow drop
    }

    function drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        e.target.innerText = data; // Replace content with dragged option
        e.target.classList.add('filled'); // Optional: Add a class for styling
    }
});