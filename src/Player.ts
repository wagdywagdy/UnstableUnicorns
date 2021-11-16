import { Card } from "./Card";
import { Hand } from "./Hand";
import { Stable } from "./Stable";

export class Player {
    hand: Hand;
    stable: Stable;
    name: string;

    constructor(name: string) {
        this.hand = new Hand();
        this.stable = new Stable();
        this.name = name;
    }

    giveCard(card: Card) {
        this.hand.addCard(card);
    }
}