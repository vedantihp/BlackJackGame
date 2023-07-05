let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


let player = {
    playerName : "Vedanti" ,
    playerChips : 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = playerName + " :$ " + playerChips


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame() {
    let messageEl = document.getElementById("message-el");
    let sumEl = document.getElementById("sum-el");
    let cardEl = document.getElementById("card-el");
    cardEl.textContent = "Card: ";

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += " " + cards[i];
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard();
        sum = sum + card;
        cards.push(card);
        renderGame();
    }

    for (let i = 0; i < cards.length; i += 1) {
        console.log(cards[i]);
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber >= 11) {
        return 10;
    } else {
        return randomNumber;
    }
}

