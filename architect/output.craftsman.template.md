# Craftsman document template

This is a document for an agent to code the project features.

The building process is decomposed into stages (features). Each stage has its own prompt, inputs, outputs, validation and commit.

## Stage definition

```typescript
interface ProjectStage {
  number: number; // Stage order
  name: string; // Stage or feature name
  prompt: string; // A user story used as prompt
  inputs: string[]; // Files to be used as input
  outputs: string[]; // Expected files or results
  validation: string[]; // Expected behavior
  commit: string; // Message or instructions to be used as commit
}
```

### Stages

```typescript
const stages: ProjectStage[] = [
  {
    number: 1,
    name: "feature-1",
    prompt: `
      As a user
      I want to do something
      So that I can achieve something
    `,
    inputs: [],
    outputs: [`working code`, `tests`, `documentation`],
    validation: [`
    Scenario: Successfully doing something
      Given the user is on the page
      When the user does something
      Then the user achieves something

    Scenario: Doing something wrong
      Given the user is on the page
      When the user does something wrong
      Then the user achieves something wrong
    `],
    commit: 'feat: feature-1',
  }
]
```

