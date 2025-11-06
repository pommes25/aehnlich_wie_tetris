// This file handles user input for controlling the game, including keyboard events for moving and rotating pieces.

class InputHandler {
    constructor(scene) {
        this.scene = scene;
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.scene.input.keyboard.on('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                this.scene.moveLeft();
                break;
            case 'ArrowRight':
                this.scene.moveRight();
                break;
            case 'ArrowDown':
                this.scene.softDrop();
                break;
            case 'ArrowUp':
                this.scene.rotate();
                break;
            case ' ':
                this.scene.hardDrop();
                break;
        }
    }
}

export default InputHandler;