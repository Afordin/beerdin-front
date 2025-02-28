<div align="center">

# 🌐 Afordin Web Stats

![GitHub stars](https://img.shields.io/github/stars/Afordin/beerdin-front?style=social)
![GitHub forks](https://img.shields.io/github/forks/Afordin/beerdin-front?style=social)
![GitHub issues](https://img.shields.io/github/issues/Afordin/beerdin-front)
![Contributors](https://img.shields.io/github/contributors/Afordin/beerdin-front)

A dynamic dashboard showcasing key metrics of the Comuafor Discord community to track engagement and activity! 📊

[Figma Design
](https://www.figma.com/design/bJtuMCSitvEhSugW4mQZsW/afordin-web-stats?node-id=33-153&p=f&t=9smQhS85vKfprhe1-0/Variety-Designs?type=design&node-id=1203-960&mode=design&t=MtKYUyZD2jwNeTxp-0) · [Report a bug](https://github.com/Afordin/beerdin-front/issues)

</div>

## 📚 Table of Contents

- [🌐 Afordin Web Stats](#-afordin-web-stats)
  - [📚 Table of Contents](#-table-of-contents)
  - [🌟 Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [📦 Building for Production](#-building-for-production)
    - [🔍 Preview Production Build](#-preview-production-build)
  - [🤝 Contributing to a project](#-contributing-to-a-project)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
  - [👥 Authors](#-authors)
  - [🛠️ Stack](#️-stack)

## 🌟 Features

- 📊 Interactive dashboard displaying key server metrics
- 💬 Track message counts, active users, and popular channels
- ⏰ Identify peak activity hours and engagement trends
- 🏆 View user leaderboards and most-used reactions

## 🚀 Getting Started

1. clone or fork this repository

   ```sh
   git clone https://github.com/Afordin/beerdin-front.gitt
   ```

2. install dependencies

   ```bash
   pnpm install
   ```

3. install husky hooks

   ```bash
   pnpm prepare
   ```

4. run the project
   ```bash
   pnpm run dev
   ```

### 📦 Building for Production

To create a production-ready build:

```shellscript
# Using pnpm
pnpm build
```

### 🔍 Preview Production Build

To preview the production build locally:

```shellscript
# Using pnpm
pnpm preview
```

## 🤝 Contributing to a project

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
- add (install a new depency or files, prefer 'feat' if you are adding a feature)
- update (update dependecies or files, prefer 'refactor' if you are refactoring a feature)

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

---

## 👥 Authors

<a href="https://github.com/afordigital">
   <img width="50px" src="https://avatars.githubusercontent.com/u/43246362?v=4" />
</a>

**Thanks to all the contributors who have made this project possible!**
### Frontend
[![Contributors](https://contrib.rocks/image?repo=Afordin/beerdin-front)](https://github.com/Afordin/beerdin-front/graphs/contributors)
### Backend
[![Contributors](https://contrib.rocks/image?repo=Afordin/beerdin-api)](https://github.com/Afordin/beerdin-api/graphs/contributors)
[![Contributors](https://contrib.rocks/image?repo=Afordin/beerdin)](https://github.com/Afordin/beerdin/graphs/contributors)

## 🛠️ Stack

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) <img src= "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> ![SHADCN](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white)

Made with ❤️ by [comuafor 🐀](https://discord.com/invite/comuafor)
