# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Terminal (install)
-npm create vite@latest
-npm install

Up GitHub repository
- vite.config.js
    -  base:"https://andresquito.github.io/02.Emoji-Selection"

package.json (scripts)
-"predeploy": "npm run build",
-"deploy": "gh-pages -d dist"

Terminal (install)
- npm i --save-dev gh-pages
- npm run deploy
