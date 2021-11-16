import { Card } from "./Card";

export class Hand {
    cards: Card[];

    constructor() {
        this.cards = [];
    }

    addCard(card: Card) {
        this.cards.push(card);
    }
}