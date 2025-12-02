# React Native Web Test

A minimal React Native Web form that runs directly in the browser using CDN modules. Fill in your name, email, and a short message, then submit to see a summary.

## Running locally

1. Start a simple static server from the project root:
   ```bash
   npm run start
   ```
   This serves the project at [http://localhost:4173](http://localhost:4173).
2. Open the URL in your browser. The form is rendered with React Native Web components—no build step required.

## Project structure

- `index.html` – entry point that loads the CDN modules and mounts the app.
- `main.js` – registers the React Native Web app and renders it into the page.
- `src/App.js` – the form UI and styles using React Native primitives.
- `src/styles.css` – minimal global styles for the page background and typography.
