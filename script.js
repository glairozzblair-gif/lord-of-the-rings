document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const bookContainer = document.querySelector('.book-container');
    const titleElement = document.getElementById('lotr-title');
    const titleSpans = titleElement.querySelectorAll('span');
    const barFill = document.getElementById('bar-fill');

    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += 3;
        if (progress > 100) progress = 100;

        barFill.style.width = progress + '%';

        if (progress === 100) {
            clearInterval(loadingInterval);

            bookContainer.classList.add('open');

            titleSpans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('visible');
                }, 80 * index);
            });

            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'visible';
                document.querySelectorAll('.title-container, .books-container, .character-container, .note-container, .qoute').forEach(el => el.classList.add('show'));
            }, 1500);
        }
    }, 50);

});