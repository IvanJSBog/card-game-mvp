import {Card} from "./Card";

export class Deck {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    // реализация тасования Фишера-Йетса O(n)
    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw(): Card | undefined {
        return this.cards.pop();
    }
}
