// This file contains the main gameplay logic, rendering the game board and pieces, and handling game over conditions.

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.board = null;
        this.pieces = null;
        this.currentPiece = null;
        this.score = 0;
    }

    preload() {
        // Load assets here (sprites, audio, etc.)
        this.load.image('block', 'assets/sprites/block.png');
    }

    create() {
        this.board = new Board(this);
        this.pieces = new Pieces();
        this.spawnPiece();
        this.input.keyboard.on('keydown', this.handleInput, this);
    }

    update() {
        if (this.currentPiece) {
            this.currentPiece.update();
            if (this.board.isGameOver()) {
                this.gameOver();
            }
        }
    }

    spawnPiece() {
        this.currentPiece = this.pieces.getRandomPiece();
        this.board.addPiece(this.currentPiece);
    }

    handleInput(event) {
        switch (event.key) {
            case 'ArrowLeft':
                this.board.movePiece(-1);
                break;
            case 'ArrowRight':
                this.board.movePiece(1);
                break;
            case 'ArrowDown':
                this.board.dropPiece();
                break;
            case 'ArrowUp':
                this.board.rotatePiece();
                break;
        }
    }

    gameOver() {
        this.scene.start('MenuScene'); // Transition to menu on game over
    }
}

export default GameScene;