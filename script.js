const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const question = document.querySelector("h1");

let yesSize = 20;
let noSize = 20;
let noClicks = 0;

const messages = [
    "Are you sure? 🥺",
    "Really?? 😭",
    "Think about it... 💕",
    "Pleaseee? 🥹",
    "You're breaking my heart 😭",
    "Okay, you can't escape now 💀"
];

noButton.addEventListener("click", () => {
    noClicks++;
    // Make NO smaller
noSize -= 3;

if (noSize < 8) {
    noSize = 8;
}

noButton.style.fontSize = `${noSize}px`;
noButton.style.padding = `${noSize / 2}px ${noSize}px`;

    // Make YES bigger
    yesSize += 10;
    yesButton.style.fontSize = `${yesSize}px`;
    yesButton.style.padding = `${yesSize / 2}px ${yesSize}px`;

    // Change the question
    question.textContent =
        messages[Math.min(noClicks - 1, messages.length - 1)];

    // Move NO somewhere random
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="success">
            <img 
                src="cute-character.png" 
                alt="Cute character"
                class="character"
            >

            <h1>YAY!! 💕</h1>
            <p>I knew you'd say yes 🥹</p>

            <div class="hearts">💗 💕 💗 💕 💗</div>
        </div>
    `;
});
