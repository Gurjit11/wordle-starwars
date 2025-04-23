# **App Name**: Star Wordle

## Core Features:

- Word Guessing Logic: Progressive levels with predefined Star Wars-related words and classic Wordle rules of 6 guesses, green/yellow/gray feedback.
- Game State Management: Level complete and game over screens with retry and restart options.
- UI and Sharing: Responsive layout with on-screen keyboard and shareable results via copy-to-clipboard.

## Style Guidelines:

- Primary color: #000000 (Black) - Inspired by the vastness of space.
- Secondary color: #FFE81F (Yellow) - Evokes the classic Star Wars opening crawl.
- Accent: #00A2E8 (Light Blue) - Mimics the color of lightsaber blades
- Use a clean, sans-serif font for readability and a modern feel.
- Mobile-first, responsive design with clear grid for tiles and keyboard.
- Subtle transitions for tile flips and level completion.

## Original User Request:
Build me a complete Star Wars–themed Wordle clone as a single-page React.js app, styled with Tailwind CSS.

Core requirements:

10 progressive levels, each with a predefined Star Wars–related target word (e.g. “JEDI”, “FORCE”, “DARTH”, etc.).

Classic Wordle rules:

6 guesses per level

Feedback colors: green for correct spot, yellow for right letter/wrong spot, gray for absent

On correct guess, show a “Level Complete” screen and automatically advance after a 2-second delay

On failure (6 wrong attempts), reveal the answer and offer “Retry Level” or “Restart Game”

State management via React Hooks (no class components).

Responsive layout: mobile-first, keyboard support, and visually styled using Tailwind utility classes.

Data/config: store your 10 words (and optional hints) in a JSON or JS module so it’s easy to swap them out.

Technical details:

Bootstrapped with Create React App or Vite

Tailwind CSS configured in tailwind.config.js for custom Star Wars palette (e.g. “#FFE81F” for yellow, “#000000” for black)

Components:

<Game /> to manage level, guesses, and game over logic

<Grid /> to render rows of <Tile /> components

<Keyboard /> on-screen letter keyboard synced with guess state

<LevelComplete /> / <GameOver /> overlays

Include a README with setup (npm/yarn install, dev & build scripts) and deployment notes

Optional bonus: shareable results (“I beat Level 5 of Star Wordle in 4 tries!”) via copy-to-clipboard

Deliver a GitHub-ready folder structure, all React/Tailwind source files, and clear instructions so I can clone, build, and run the app out of the box.

try not to use backend or any external apis just do thing in the react.js app
  