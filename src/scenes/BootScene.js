class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load assets here
        this.load.image('block', 'assets/sprites/block.png');
        this.load.audio('theme', 'assets/audio/theme.mp3');
    }

    create() {
        // Start the MenuScene after loading is complete
        this.scene.start('MenuScene');
    }
}