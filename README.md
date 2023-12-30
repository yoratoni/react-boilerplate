# React Boilerplate
A React & EsLint boilerplate entirely configured to suit my standards.

Summary
-------
You can find here a list of the main features of this boilerplate:
- [TailwindCSS](https://tailwindcss.com/) support.
- [TypeScript](https://www.typescriptlang.org/) support.
- [EsLint](https://eslint.org/) support (already configured).
- [Craco](https://craco.js.org/) support (already configured).
- [React](https://reactjs.org/) support.

Here's the list of the main EsLint rules:
- **[ERROR]** UNIX linebreaks.
- **[ERROR]** Required semi-colons.
- **[WARN]** Recommended double quotes.
- **[WARN]** Two new lines after imports.
- **[WARN]** No unused variables.
- **[WARN]** EsLint sorted imports (auto-sorted with VSCode).

Notes:
- The default `index.js` entry file has been replaced by `_document.tsx` file. Making
it similar to Next.js.
- TailwindCSS lack of text shadow support has been fixed by adding custom ones.
- `child` variants has been added to TailwindCSS.