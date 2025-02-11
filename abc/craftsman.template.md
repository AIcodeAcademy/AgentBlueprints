---
information: You must fill the {{ information placeholder }}
code_style: a predefined group of code style improvements, one or more of the following; data types, function complexity, naming conventions all of them following the current code style at @/.cursor/rules folder.
features_list: get them from the architect blueprint
feature_repetition: use the @for(){} as a loop
feature_name: Name each feature with the following format `1_feature_one` `2_feature_two` `3_feature_three` etc.
important: respect the current folder structure and the tech stack. use the current code as an example.
---

# Craftsman Blueprint for **{{ Project Name }}**

{{ Project Description }}

## Code style improvements

### Data types

```text
  - {{ files to touch }}
  - {{ instructions to ensure all code has its type }}
```

### Function complexity

```text
  - {{ files and folders to touch }}
  - {{ instructions to reduce the code complexity for lengtly or nested functions }}
```

### Naming conventions

```text
  - {{ files to touch }}
  - {{ instructions to improve the naming conventions for variables, functions, components, etc }}
```

---

## E2E tests

Based on test rules

@for (feature of features) {

### {{ feature number }}\_{{ feature name }}

```text
  - {{ e2e test files to create }}
  - {{ instructions to generate the e2e test files following @rules/e2e.mdc rules }}
```

}

---

## Release documentation

```text
  - {{ docs files to touch }}
  - {{ instructions to generate the code documentation following @rules/docs.mdc rules }}
  - {{ instructions to generate the release documentation files following @rules/git.mdc rules }}
```

---
