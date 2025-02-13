---
information: Generate a markdown file with the data model blueprint based on this template.
defaults: The first option is the default.
entities: Define the main entities for the project.
relations: Define relationships between entities (e.g., one-to-many, many-to-many).
attributes: Define details of each entity's attributes, including type, mandatory, unique, etc.
keys: Define the primary key and its generation strategy
---

# Data Model for **{{ Project Name }}**

This document describes the data model for the **{{ Project Name }}** project. It covers the primary entities, their attributes, relationships, and provides a visual representation using a mermaid diagram.

<!--This is the most critical part of the data model.
- Read the feature and specification lists to get an idea of the application domain.
- Think deeply about the entities and their relationships.
- Evaluate 2-3 options and choose the simplest one.
- After having the entities, think about the attributes.
- Take into account it it will be a relational or a no-sql database.
- Then materialize the list of entities and their attributes and relationships.
 -->

## Main Entities

@for(entity of entities) {

### {{ entity.name }}

- **Description**: {{ entity.description }}
- **Attributes**:
  @for(attribute of entity.attributes) {
  - **{{ attribute.name }}**: {{ attribute.type }} - {{ attribute.mandatory | true | false }} - {{ attribute.unique | true | false  }}
    }
    }

## Relationships

@for(relation of relations) {

- **{{ relation.source }}** {{ relation.cardinality }} **{{ relation.target }}**
  - Description: {{ relation.description }}
    }

## Mermaid Diagram

```mermaid
{{ A mermaid diagram representing the entity relationships.}}
```

<!--For example:
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    CUSTOMER }|..|{ DELIVERY_ADDRESS : uses
}}
-->

_End of Data Model Document for {{ Project Name }}_
