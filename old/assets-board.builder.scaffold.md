# Builder document for Assets Board

This is a document for an agent to build the foundation of the Assets Board project.

NO FEATURES ARE GENERATED HERE; ONLY PROJECT STRUCTURE, DEPENDENCIES AND CI/CD.

The building process is decomposed into stages. Each stage has its own prompt, inputs, outputs, validation and commit.

## Stage definition

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

### Stages

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
    inputs: ['@assets-board.requirements.md'],
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
      `,
    inputs: [],
    outputs: ['package.json', '.eslintrc.json', '.prettierrc.json'],
    validation: ['npm run lint'],
    commit: "chore: add linting",
  },
  {
    number: 3,
    name: "upgrade",
    prompt: ` 
    - Install npm-check-updates for development.
    - Add an npm script to run it.
    - Add an npm script to update and fix the dependencies.`,
    inputs: [],
    outputs: ['package.json'],
    validation: ['npm install'],
    commit: "chore: upgrade the dependencies",
  },
  {
    number: 4,
    name: 'boilerplate',
    prompt: `
    - Set up the Vite project with TypeScript.
    - Configure Playwright for end-to-end testing.
    - Apply PicoCSS for styling with specified fonts and colors.
    - Create a home page that includes the developer documentation and project summary.`,
    inputs: ['@assets-board.requirements.md'],
    outputs: ['vite project', 'playwright project', 'styling', 'home page with readme summary for developers'],
    validation: ['npm run build', 'npm run test'],
    commit: 'feat: project boilerplate'
  },
];
