document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const barFill = document.getElementById("bar-fill");
    const mainContent = document.querySelector("body > :not(#loading-screen)");
    const lotrTitle = document.getElementById("lotr-title");
    const spans = lotrTitle ? lotrTitle.querySelectorAll("span") : [];

    let progress = 0;
    const loadingDuration = 3000;
    const intervalTime = 30;

    mainContent.style.display = "none";

    const interval = setInterval(() => {
        progress += 1;
        barFill.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);

            if (spans.length) {
                spans.forEach((span, idx) => {
                    span.style.opacity = "0";
                    span.style.transform = "translateY(20px)";
                    setTimeout(() => {
                        span.style.transition = "all 0.5s ease";
                        span.style.opacity = "1";
                        span.style.transform = "translateY(0)";
                    }, idx * 100);
                });
            }

            setTimeout(() => {
                loadingScreen.style.transition = "opacity 1s ease";
                loadingScreen.style.opacity = "0";
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                    mainContent.style.display = "block";
                }, 1000);
            }, 800);
        }
    }, loadingDuration / 100);

    const leftBook = document.querySelector(".book-left");
    const rightBook = document.querySelector(".book-right");
    if (leftBook && rightBook) {
        let flipAngle = 0;
        const flipInterval = setInterval(() => {
            flipAngle += 2;
            if (flipAngle > 30) flipAngle = 15;
            leftBook.style.transform = `rotateY(${-flipAngle}deg)`;
            rightBook.style.transform = `rotateY(${flipAngle}deg)`;
        }, 30);
        setTimeout(() => clearInterval(flipInterval), loadingDuration);
    }
});