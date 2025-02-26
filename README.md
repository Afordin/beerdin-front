# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting started

1. clone or fork this repository

   ```sh
   git clone https://github.com/Afordin/hackafor-2.git
   ```

2. install dependencies

   ```bash
   pnpm install
   ```

3. run the project
   ```bash
   pnpm run dev
   ```

## Contributing to a project

1. **Cloning a fork:**
   Click on the [_fork_](https://github.com/Afordin/beerdin-front/fork) button at the top right corner of the repository to create a copy of the project in your GitHub account.
2. **Clone the Repository:** Clone your forked repository to your local machine using the command (`git clone <fork URL>`) in your terminal.
3. **Set upstream branch:** To keep your forked repository updated with the original repository, use the command (`git remote add upstream <repository original URL>`).
4. **Create branch:** (`git checkout -b feature/some-feature`).
5. **Stage the changed files:** by using git-add to incrementally "add" changes to the index before using the commit command (`git add <file>`).
6. **Record changes to the repository:** Create a new commit containing the current contents of the index and the given log message describing the changes(`git commit -m 'feat: some feature'`).

_Some commit verbs and message good practices:_

Verbs:

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- hotfix
- remove
- ci (For ci/cd changes)
- perf (performance the app)
- add (install a new depency or files what are not a feature of the project like a readme)
- update (update dependecies or files what are not a feature of the project like a readme)

Message:

- just as in use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

7. **Submit your Contribution:** Upload your branch with the changes to forked repository on GitHub using (`git push origin feature/some-feature`).
8. **Generate a request:** To complete the process of creating your PR, simply hit [_pull request_](https://github.com/Afordin/beerdin-front/pulls)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
});
```
