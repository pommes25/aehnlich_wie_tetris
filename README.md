# Tetris Game using Phaser

This project is a Tetris game built using the Phaser library. It features classic Tetris gameplay with modern web technologies, allowing players to enjoy the game in their browsers.

## Project Structure

- **public/**: Contains the main HTML files.
  - **index.html**: The entry point for the game.
  - **404.html**: Custom 404 error page.

- **src/**: Contains the source code for the game.
  - **main.js**: Initializes the game and starts the main scene.
  - **game/**: Contains the core game logic.
    - **engine.js**: Game engine logic and game loop.
    - **pieces.js**: Definitions for Tetris pieces (tetrominoes).
    - **board.js**: Manages the game board and collision detection.
    - **input.js**: Handles user input for controlling the game.
  - **scenes/**: Contains different scenes for the game.
    - **BootScene.js**: Loads assets and initializes the game.
    - **MenuScene.js**: Displays the main menu.
    - **GameScene.js**: Contains the main gameplay logic.
  - **styles/**: Contains CSS styles for the game.
    - **main.css**: Styles for layout and design.

- **assets/**: Contains game assets.
  - **audio/**: Audio files for sound effects and music.
  - **sprites/**: Sprite images for game pieces and background.

- **.github/**: Contains GitHub Actions workflows.
  - **workflows/**: Workflow configuration for deployment.
    - **deploy.yml**: GitHub Actions for deploying to GitHub Pages.

- **.gitignore**: Specifies files to ignore in version control.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **vite.config.js**: Configuration for Vite, the build tool.

- **LICENSE**: Licensing information for the project.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tetris-phaser.git
   ```

2. Navigate to the project directory:
   ```
   cd tetris-phaser
   ```

3. Install the dependencies (this will create a lockfile locally):
  ```powershell
  npm install
  ```

  Note: Running `npm install` locally will produce a `package-lock.json`. Commit that file to the repository to allow CI to use `npm ci` for reproducible installs.

4. Run the development server:
  ```powershell
  npm start
  ```

5. Open your browser and go to `http://localhost:5173` (Vite default) to play the game.

## Deployment

This project is set up for deployment on GitHub Pages via a GitHub Actions workflow. When you push to the `main` branch the workflow will:

- install dependencies
- build the project with Vite (`npm run build`)
- publish the `dist/` folder to GitHub Pages

If your local CI build failed because `npm ci` could not run (missing `package-lock.json`), create and commit the lockfile locally as described above and push it — this will make CI use `npm ci` (fast and reproducible).

Tip: You can also run a local build to verify the output before pushing:

```powershell
npm install
npm run build
dir .\dist
```

The workflow triggers on pushes to `main`. If your repository uses a different default branch, update `.github/workflows/deploy.yml` accordingly.

## Gameplay

- Use the arrow keys to move and rotate the Tetris pieces.
- The objective is to fill horizontal lines with blocks to clear them.
- The game ends when the pieces stack up to the top of the board.

Enjoy playing Tetris!