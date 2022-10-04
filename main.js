//I have choose the javascript for the for my code.This game can be played by 2 players NOTE: I HAVE MAKE THIS CODE TO RUN IN BROWSER, BUT AT SERVERSIDE THESE CLASSES CAN BE EXPORTED AND IMPORTED AS A LIBRARY.
//first i will declare the class card, the properties it holds are the suit,rank and value of the card actually it holds.
//Later bothe player will be given deck of the cards, for example 52/2 means 26 cards each will be given, they will show it one by one,

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
//Deck will be bunch of cards, each card means value holds particular suits,ranks and values.
class Deck {
    constructor() {
        this.cards = [];    //this cards array will hold total of 52 cards.
    }      
    //createDeck will run 2 for loops to make 52 different cards, like clubs of each ace to king, same for diamond, hearts and spades.
    createDeck() {  
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9','10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
        console.log("total cards in the deck are:",this.cards.length);
    }
    //now we have creates deck of 52 cards it's time to suffle the deck.Basically we will generate run the loop for 1000(could be any number) times, each time it will generate 2 random numbers out of 52 and swap their location in the cards array.
    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }
}
//Player class have property, which will holds the playerName and cards given to them.
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}
//if we are playing card game, obviously board to place the cards are necessary right?? let's make the board which will have property like cards shown by each player.
class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    //start method is to register name of 2 players, then crete deck and shuffle the cards, after shuffling the card provide 26 cards(half a deck) to each player.
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }
}

function startGame(){
    document.getElementById("playerOneCards").innerHTML = "";
    document.getElementById("playerTwoCards").innerHTML = "";
    let gameBoard = new Board();
    gameBoard.start('Divij', 'Patel');
    var playerOne = document.getElementById("playerOneCards");
    var playerTwo = document.getElementById("playerTwoCards");
    var cardDeckOne = gameBoard.players[0].playerCards;
    var cardDeckTwo = gameBoard.players[1].playerCards
        cardDeckOne.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            playerOne.innerHTML+=(`\t${key}: ${value}`); // write each key-value pair as a line of text
             playerOne.innerHTML+=(' '); // add another line break after each object for better readability 
        });
        playerOne.innerHTML+=('\n'); // add another line break after each object for better readability 
        });
        
        cardDeckTwo.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            playerTwo.innerHTML+=(`\t${key}: ${value}`); // write each key-value pair as a line of text
        });
        playerTwo.innerHTML+=('\n'); // add another line break after each object for better readability 
        });
        
console.log(gameBoard.players); 
}

