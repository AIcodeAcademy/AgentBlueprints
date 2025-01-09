# Craftsman document for Assets Board

This is a document for an agent to code the project.

GENERATE CLEAN CODE, WRITE TESTS AND DOCUMENTATION.

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
    name: "manage-categories",
    prompt: `
    Generate the minimal code to allow the user to add, edit, and delete categories.
    Ensure that each category has a name, liquidity flag, and risk flag.
    `,
    inputs: [`
      As a user,
      I want to manage categories
      So that I can organize my financial assets.
    `],
    outputs: ['working code', 'tests', 'documentation'],
    validation: [`
      Scenario: Adding a category
        Given the user is on the categories management page
        When the user adds a category
        Then the category is displayed in the list

      Scenario: Editing a category
        Given the user is on the categories management page
        When the user edits a category
        Then the updated category is displayed in the list

      Scenario: Deleting a category
        Given the user is on the categories management page
        When the user deletes a category
        Then the category is removed from the list
    `],
    commit: 'feat: manage categories',
  },
  {
    number: 2,
    name: "manage-assets",
    prompt: `
    Generate the minimal code to allow the user to add, edit, and delete assets.
    Ensure that each asset is linked to a category and includes a name, units, value, and date.
    `,
    inputs: [`
      As a user,
      I want to manage assets
      So that I can track my financial information.
    `],
    outputs: ['working code', 'tests', 'documentation'],
    validation: [`
      Scenario: Adding an asset
        Given the user is on the assets management page
        When the user adds an asset
        Then the asset is displayed in the list

      Scenario: Editing an asset
        Given the user is on the assets management page
        When the user edits an asset
        Then the updated asset is displayed in the list

      Scenario: Deleting an asset
        Given the user is on the assets management page
        When the user deletes an asset
        Then the asset is removed from the list
    `],
    commit: 'feat: manage assets',
  },
  {
    number: 3,
    name: "view-summaries",
    prompt: `
    Generate the minimal code to display summaries of financial assets and categories.
    Include summaries for total value, liquidity percentages, and risk percentages.
    `,
    inputs: [`
      As a user,
      I want to view summaries
      So that I can understand my financial status.
    `],
    outputs: ['working code', 'tests', 'documentation'],
    validation: [`
      Scenario: Viewing a summary
        Given the user has assets and categories
        When the user views the summaries page
        Then the total value, liquidity percentages, and risk percentages are displayed correctly
    `],
    commit: 'feat: view summaries',
  },
  {
    number: 4,
    name: "export-import",
    prompt: `
    Generate the minimal code to allow the user to export and import data as CSV.
    Ensure data integrity during the import process.
    `,
    inputs: [`
      As a user,
      I want to export and import data
      So that I can back up or transfer my financial information.
    `],
    outputs: ['working code', 'tests', 'documentation'],
    validation: [`
      Scenario: Exporting data
        Given the user has assets and categories
        When the user exports data
        Then a CSV file is downloaded

      Scenario: Importing data
        Given the user has a valid CSV file
        When the user imports data
        Then the data is correctly added to the application
    `],
    commit: 'feat: export and import data',
  }
];
