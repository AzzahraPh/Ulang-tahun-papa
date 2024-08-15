document.addEventListener("DOMContentLoaded", () => {
    let currentMessage = 1;
    const totalMessages = 4;

    const nextMessageBtn = document.getElementById("nextMessageBtn");
    const prevMessageBtn = document.getElementById("prevMessageBtn");

    nextMessageBtn.addEventListener("click", () => {
        if (currentMessage < totalMessages) {
            const currentCard = document.getElementById(`message${currentMessage}`);
            currentCard.style.display = "none";

            currentMessage++;
            const nextCard = document.getElementById(`message${currentMessage}`);
            nextCard.style.display = "block";

            prevMessageBtn.style.display = "inline-block";
            if (currentMessage === totalMessages) {
                nextMessageBtn.style.display = "none";
            }
        }
    });

    prevMessageBtn.addEventListener("click", () => {
        if (currentMessage > 1) {
            const currentCard = document.getElementById(`message${currentMessage}`);
            currentCard.style.display = "none";

            currentMessage--;
            const prevCard = document.getElementById(`message${currentMessage}`);
            prevCard.style.display = "block";

            nextMessageBtn.style.display = "inline-block";
            if (currentMessage === 1) {
                prevMessageBtn.style.display = "none";
            }
        }
    });

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const finalMessage = document.getElementById("finalMessage");
    const finalImage = document.getElementById("finalImage");

    noBtn.addEventListener("mouseover", () => {
        const randomX = Math.floor(Math.random() * 200) - 100;
        const randomY = Math.floor(Math.random() * 200) - 100;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    yesBtn.addEventListener("click", () => {
        finalMessage.style.display = "block";
        finalImage.style.display = "block";
    });
});
