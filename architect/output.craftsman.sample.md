# Craftsman Document for TaskList

This is a document for an agent to code the **TaskList** project.

**GENERATE CLEAN CODE, WRITE TESTS, AND DOCUMENTATION.**

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
    name: "add-task",
    prompt: `
    As a user
    I want to add a task
    So that I can organize my activities`,
    inputs: [],
    outputs: [`working code`, `tests`, `documentation`],
    validation: [
      `Scenario: Successfully adding a task
        Given the user is on the page
        When the user adds a task
        Then the task is added`
    ],
    commit: "feat: add-task",
  },
  {
    number: 2,
    name: "remove-task",
    prompt: `
    As a user
    I want to remove a task
    So that I can manage my list effectively`,
    inputs: [], 
    outputs: [`working code`, `tests`, `documentation`],
    validation: [
      `Scenario: Successfully removing a task
        Given the user is on the page
        When the user removes a task
        Then the task is removed`
    ],
    commit: "feat: remove-task",
  },
  {
    number: 3,
    name: "edit-task",
    prompt: `
    As a user
    I want to edit a task
    So that I can update its details`,
    inputs: [],
    outputs: [`working code`, `tests`, `documentation`],
    validation: [
      `Scenario: Successfully editing a task
        Given the user is on the page
        When the user edits a task
        Then the task is updated`
    ],
    commit: "feat: edit-task",
  },
  {
    number: 4,
    name: "mark-task-done",
    prompt: `
    As a user
    I want to mark a task as done
    So that I can track my progress`,
    inputs: [],
    outputs: [`working code`, `tests`, `documentation`],
    validation: [
      `Scenario: Successfully marking a task as done
        Given the user is on the page
        When the user marks a task as done
        Then the task is marked as completed`
    ],
    commit: "feat: mark-task-done",
  },
  {
    number: 5,
    name: "show-task-status",
    prompt: `
    As a user
    I want to see pending and completed tasks
    So that I can monitor my task statuses`,
    inputs: [],
    outputs: [`working code`, `tests`, `documentation`],
    validation: [
      `Scenario: Viewing task statuses
        Given the user is on the page
        When the user views the task list
        Then pending and completed tasks are displayed separately`
    ],
    commit: "feat: show-task-status",
  }
];
```

