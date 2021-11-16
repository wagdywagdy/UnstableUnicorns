export class Card {
    name: string;
    imageUrl!: string;
    description!: string;
    cardType!: CardType;
    atBeginningAction!: Action;
    atEndOfTurnAction!: Action;
    onEnteringStableAction!: Action;
    onDiscardAction!: Action;
    onSacrificeAction!: Action;
    onDistroyAction!: Action;
    onStealAction!: Action;

    constructor(name: string) {
        this.name = name;
    }
}