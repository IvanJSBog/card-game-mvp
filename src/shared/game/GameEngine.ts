import {Player} from "./Player";

export class GameEngine {
    constructor(private player1: Player, private player2: Player) {
    }
    startGame(): void {
        console.log('Game started');
    }
}