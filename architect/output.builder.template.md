# Builder document template

This is a document for an agent to build the foundation of the project.

NO FEATURES ARE GENERATED HERE; ONLY PROJECT STRUCTURE, DEPENDENCIES AND CI/CD.

The building process is decomposed into stages. Each stage has its own prompt, inputs, outputs, validation and commit.

## Stage definition

```typescript
interface ProjectStage {
  number: number; // Stage order
  name: string; // Stage name
  prompt: string; // Text or file to be used as prompt
  inputs: string[]; // Files to be used as input
  outputs: string[]; // Expected files or results
  validation: string[]; // Commands to validate the stage
  commit: string; // Message or instructions to be used as commit
}
```

### Stages

```typescript
const stages: ProjectStage[] = [
  {
    number: 1,
    name: "initialize",
    prompt: '',
    inputs: [],
    outputs: [],
    validation: [],
    commit: '',
  }
]
```

