---
information: You must fill the {{ information placeholder }}
features_list: get them from the architect blueprint
feature_repetition: use the @for(){} as a loop
feature_name: Name each feature with the following format `1_feature_one` `2_feature_two` `3_feature_three` etc.
feature_layers: a predefined group of tech layers for the feature, one or more of the following; data, business logic, ui components, user interactions.
feature_steps: a detailed list of steps for an agent to generate code that implements the feature layer.
important: respect the current folder structure and the tech stack. use the current code as an example.
---

# Builder Blueprint for **{{ Project Name }}**

{{ Project Description }}

@for (feature of features) {

## {{ feature number }}\_{{ feature name }}

{{ feature description }}

### Data Structures

```text
  - {{ files and folders touched }}
  - {{ instructions to generate the data structure }}
```

### Utility Functions

```text
  - {{ files and folders touched }}
  - {{ instructions to generate the utility functions }}
```

### Business Logic Functions

```text
  - {{ files and folders touched }}
  - {{ instructions to generate the business logic functions }}
```

### UI Components

```text
  - {{ files and folders touched }}
  - {{ instructions to generate the UI components }}
```

### User Interactions

```text
  - {{ files and folders touched }}
  - {{ instructions to generate the user interactions }}
```

---

}
