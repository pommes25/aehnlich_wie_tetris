class Board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.createGrid();
    }

    createGrid() {
        return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    }

    draw(ctx) {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                ctx.fillStyle = this.grid[r][c] ? 'blue' : 'white';
                ctx.fillRect(c * 30, r * 30, 30, 30);
                ctx.strokeRect(c * 30, r * 30, 30, 30);
            }
        }
    }

    collide(piece) {
        for (let r = 0; r < piece.shape.length; r++) {
            for (let c = 0; c < piece.shape[r].length; c++) {
                if (piece.shape[r][c] && this.grid[r + piece.y][c + piece.x]) {
                    return true;
                }
            }
        }
        return false;
    }

    merge(piece) {
        for (let r = 0; r < piece.shape.length; r++) {
            for (let c = 0; c < piece.shape[r].length; c++) {
                if (piece.shape[r][c]) {
                    this.grid[r + piece.y][c + piece.x] = 1;
                }
            }
        }
    }

    clearLines() {
        for (let r = this.rows - 1; r >= 0; r--) {
            if (this.grid[r].every(cell => cell)) {
                this.grid.splice(r, 1);
                this.grid.unshift(Array(this.cols).fill(0));
            }
        }
    }
}

export default Board;