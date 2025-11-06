const TETROMINOS = {
    I: {
        shape: [
            [1, 1, 1, 1]
        ],
        color: '#00F0F0'
    },
    J: {
        shape: [
            [0, 0, 1],
            [1, 1, 1]
        ],
        color: '#0000F0'
    },
    L: {
        shape: [
            [1, 0, 0],
            [1, 1, 1]
        ],
        color: '#F0A500'
    },
    O: {
        shape: [
            [1, 1],
            [1, 1]
        ],
        color: '#F0F000'
    },
    S: {
        shape: [
            [0, 1, 1],
            [1, 1, 0]
        ],
        color: '#00F000'
    },
    T: {
        shape: [
            [0, 1, 0],
            [1, 1, 1]
        ],
        color: '#A500F0'
    },
    Z: {
        shape: [
            [1, 1, 0],
            [0, 1, 1]
        ],
        color: '#F00000'
    }
};

class Pieces {
    constructor() {
        this.tetrominos = TETROMINOS;
    }

    getRandomPiece() {
        const keys = Object.keys(this.tetrominos);
        const k = keys[Math.floor(Math.random() * keys.length)];
        const proto = this.tetrominos[k];
        // Return a new piece instance with its own shape copy and initial position
        return {
            shape: proto.shape.map(row => row.slice()),
            color: proto.color,
            x: 3,
            y: 0,
            update() {
                // placeholder for piece update logic
            }
        };
    }
}

export default Pieces;