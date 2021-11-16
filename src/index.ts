import { Deck } from "./Deck";
import { Player } from "./Player";

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");
const player3 = new Player("Player 3");
const player4 = new Player("Player 4");

const players = [player1, player2, player3, player4];

const gameDeck = new Deck();
gameDeck.initializeDeck();
for (let i = 0; i < 7; i++) {
  for (var player of players) {
    player.giveCard(gameDeck.draw());
  }
}

console.log(players);