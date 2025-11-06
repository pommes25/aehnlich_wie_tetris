class Engine {
    constructor(game) {
        this.game = game;
        this.lastTime = 0;
        this.deltaTime = 0;
    }

    start() {
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timestamp) {
        this.deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update();
        this.render();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    update() {
        // Update game state logic here
        this.game.update();
    }

    render() {
        // Render game state here
        this.game.render();
    }
}

export default Engine;