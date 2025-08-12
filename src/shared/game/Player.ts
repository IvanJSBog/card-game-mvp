import {Deck} from "./Deck";
import {Card} from "./Card";

export class Player {
    public hand: Card[] = [];
    public health: number = 30;

    constructor(public name: string, public deck: Deck) {}

    drawCard(): void {
        const card = this.deck.draw()
        if (card) {
            this.hand.push(card);
        }
    }
}