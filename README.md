
# Star Wordle

A Star Wars-themed Wordle clone built with Next.js and Tailwind CSS.

## Setup

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd star-wordle
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Development

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and visit `http://localhost:9002`.

## Build

1.  Build the application for production:

    ```bash
    npm run build
    # or
    yarn build
    ```

## Deployment

1.  Export the application:

    ```bash
    npm run export
    # or
    yarn export
    ```

2.  Deploy the contents of the `out` directory to your hosting provider of choice (e.g., Netlify, Vercel, Firebase Hosting).

## Notes

*   The game's word list is located in `src/lib/words.ts`. You can modify this file to change the words used in the game.
*   The game is styled using Tailwind CSS. You can customize the styling by modifying the CSS classes in the components or by updating the Tailwind configuration in `tailwind.config.js`.
*   The color scheme is defined in `src/app/globals.css`. Modify the CSS variables to change the color scheme of the game.
