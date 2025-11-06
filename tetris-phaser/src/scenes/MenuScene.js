class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        this.load.image('playButton', 'assets/sprites/play_button.png');
        this.load.image('instructionsButton', 'assets/sprites/instructions_button.png');
    }

    create() {
        this.add.text(100, 50, 'Tetris', { fontSize: '32px', fill: '#fff' });

        const playButton = this.add.sprite(100, 150, 'playButton').setInteractive();
        const instructionsButton = this.add.sprite(100, 250, 'instructionsButton').setInteractive();

        playButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        instructionsButton.on('pointerdown', () => {
            // Logic to show instructions
        });

        this.input.on('pointerover', (pointer, gameObject) => {
            gameObject.setTint(0x44ff44);
        });

        this.input.on('pointerout', (pointer, gameObject) => {
            gameObject.clearTint();
        });
    }
}