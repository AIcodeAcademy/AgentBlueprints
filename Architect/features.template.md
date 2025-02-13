---
information: Generate a markdown file documenting a feature.
important: This is a template for one and only one feature.
file_name: {{featureNumber}}-{{feature_short_name}}.blueprint.md
---

# Feature: **{{ Feature Number }} - {{ Feature Short Name }}**

## Description

{{ Provide a concise description of the feature. Explain its purpose, primary behavior, and expected outcomes. }}

## Involved Data Models

The following data models play a role in this feature:

@for(model of additionalModels) {

- **{{ model.name }}**: {{ model.description }}
  }

## Acceptance Criteria (in Gherkin Syntax)

```gherkin
Feature: {{ Feature Name }}
  As a {{ role }}
  I want {{ feature context or action }}
  So that {{ benefit }}

  Scenario: {{ Scenario Name }}
    Given {{ initial context or state }}
    When {{ the action is performed }}
    Then {{ the expected outcome }}

  @for(scenario of additionalScenarios) {
  Scenario: {{ scenario.name }}
    Given {{ scenario.given }}
    When {{ scenario.when }}
    Then {{ scenario.then }}
  }
```

## Additional Information

- **Dependencies**: {{ List any dependencies or external integrations that this feature requires. }}
- **Preconditions**: {{ Outline any system or user preconditions required for this feature. }}
- **Notes**: {{ Provide any extra notes or clarifications regarding the feature. }}

_End of Feature Documentation for {{ Feature Name }}_
