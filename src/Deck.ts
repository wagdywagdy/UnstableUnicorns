import arrayShuffle from 'array-shuffle';
import { Card } from './Card';

export class Deck {
    cards: Card[];

    constructor() {
        this.cards = [];
    }

    shuffle() {
        this.cards = arrayShuffle(this.cards);
    }

    addCard(card: Card) {
        this.cards.push(card)
    }

    initializeDeck() {
        for(let i = 1; i <= 100; i++) {
            const card = new Card('C' + i);
            this.addCard(card);
        }
        this.shuffle();
    }

    draw(): Card {
        return this.cards.pop()!;
    }
}
