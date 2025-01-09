# Builder Document for TaskList

This is a document for an agent to build the foundation of the **TaskList** project.

**NO FEATURES ARE GENERATED HERE; ONLY PROJECT STRUCTURE, DEPENDENCIES, AND CI/CD.**

The building process is decomposed into stages. Each stage has its own prompt, inputs, outputs, validation, and commit.

## Stage Definition

```typescript
interface ProjectStage {
  number: number;
  name: string;
  prompt: string;
  inputs: string[];
  outputs: string[];
  validation: string[];
  commit: string;
}
```

## Stages

```typescript
const stages: ProjectStage[] = [
  {
    number: 1,
    name: "initialize",
    prompt: `
    - Use the current cursor directory as the project root and git repository.
    - Initialize the git repository and the npm package manager.
    - Install the dependencies at their latest versions.
    - Add a .gitignore file.
    - Add a .cursorrules.md file with the coding rules for the project.
    - Add a README.md file with the project summary for developers.
    - Add a CHANGELOG.md file with the changes and the commit messages.`,
    inputs: ['@app-name.requirements.md'],
    outputs: [
      'git repo', 'package.json', 'tsconfig.json', 'vite.config.ts', 'playwright.config.ts',
      'CHANGELOG.md', 'README.md', '.cursorrules', '.gitignore'
    ],
    validation: ['npm install'],
    commit: "chore: initialize the project",
  },
  {
    number: 2,
    name: "dev-experience",
    prompt: `
    - Install ESLint and Prettier for development.
    - Configure ESLint to use the .cursorrules file.
    - Configure Prettier to be used as a formatter with ESLint.
    - Add an npm script to lint and format the code.
    - Install ncu for checking and updating dependencies.
    - Add an npm script to check and update the dependencies.
      `,
    inputs: [],
    outputs: ['package.json', '.eslintrc.json', '.prettierrc.json'],
    validation: ['npm run lint'],
    commit: "chore: add linting",
  },
  {
    number: 3,
    name: "boilerplate",
    prompt: `
    - Set up the Vite project.
    - Create a hello dev home page with developer documentation summarizing the project.
    - Configure Playwright for e2e testing.
    - Add e2e tests for the home page.
    - Ensure responsiveness for various device sizes.`,
    inputs: ['@app-name.requirements.md'],
    outputs: ['vite project', 'playwright project', 'hello dev home page'],
    validation: ['npm run build', 'npm run test'],
    commit: "feat: project boilerplate",
  },
  {
    number: 4,
    name: "styling",
    prompt: `
    - Install PicoCSS, Major Mono Display, Tomorrow and Fira Mono as fonts, 
    - Customize PicoCSS with fonts: Major Mono Display for logo, Tomorrow for headings, and Fira Code for body .
    - Customize PicoCSS with colors: #47d469 and #33c1ee as primary and accent colors.`,
    inputs: ['@app-name.requirements.md'],
    outputs: [ 'main.css', 'main.ts', 'index.html'],
    validation: ['npm run build', 'npm run test'],
    commit: "feat: add styling with pico",
  },
];
```

