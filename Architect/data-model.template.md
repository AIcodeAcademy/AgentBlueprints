---
information: Generate a markdown file with the data model blueprint based on this template.
defaults: The first option is the default.
entities: Define the main entities for the project.
relations: Define relationships between entities (e.g., one-to-many, many-to-many).
attributes: Define details of each entity's attributes, including type and description.
---

# Data Model for **{{ Project Name }}**

This document describes the data model for the **{{ Project Name }}** project. It covers the primary entities, their attributes, relationships, and provides a visual representation using a mermaid diagram.

## Main Entities

@for(entity of entities) {

### {{ entity.name }}

- **Description**: {{ entity.description }}
- **Attributes**:
  @for(attribute of entity.attributes) {
  - **{{ attribute.name }}**: {{ attribute.type }} - {{ attribute.description }}
    }
    }

## Relationships

@for(relation of relations) {

- **{{ relation.source }}** {{ relation.cardinality }} **{{ relation.target }}**
  - Description: {{ relation.description }}
    }

## Mermaid Diagram

```mermaid
{{ A mermaid diagram representing the entity relationships. For example:

erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    CUSTOMER }|..|{ DELIVERY_ADDRESS : uses
}}
```

_End of Data Model Document for {{ Project Name }}_
