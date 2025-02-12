---
information: Generate a md file with the system architecture based on this template.
defaults: the first option is the default.
container: A piece of deployable software, frontend, backend, database, etc.
diagram: Container C4 Diagram that displays the web application, database, and API services, highlighting their interactions.
---

# System architecture for **{{ Project Name }}**

## Overview

{{ A description of the project }}

@if(has frontend) {

## Frontend

### Tech Stack

- **Language**: {{ TypeScript | JavaScript | Python | None | Other }}
- **Framework**: {{ Vite_Vanilla_TS | Astro_CMS | Angular_SPA | None | Other }}
- **Styling**: {{ PicoCSS | Tailwind_CSS | Bootstrap | None | Other }}
- **State Management**: {{ Redux | None | Other }}
- **Routing**: {{ React_Router | Angular_Router | None | Other }}
- **API**: {{ Fetch | Axios | None | Other }}

### Architecture

- {{ Layered | Clean | Hexagonal | None | Other }}
- {{ Functional | Object-Oriented | None | Other }}
- Folder structure

  ```
  - src/
    - app/ (pages and repositories)
    - models/ (data models)
    - utils/ (helpers and shared components)
  ```

### Presentation

- SPAs, SSR, Static, etc.
- Routes, modals, etc.
- {{ Responsive | Dark_Mode  }}
- Colors : {{ Lime | Cyan | Other }}
- Fonts : {{ Tomorrow | Fira_Mono | Other }}

}

@if(has backend) {

## Backend

### Tech Stack

- **Language**: {{ TypeScript | JavaScript | Go | None | Other }}
- **Framework**: {{ Bun_Vanilla_TS | Node_Express | None | Other }}

### Architecture

- {{ Layered | Clean | Hexagonal | None | Other }}
- {{ Functional | Object-Oriented | None | Other }}
- Folder structure

  ```
  - src/
    - api/ (controllers and repositories)
    - models/ (data models)
    - utils/ (helpers)
  ```

### Authentication

- {{ JWT | None | Other }}

}

@if(has database) {

### Database

- {{ Relational | NoSQL | None | Other }}
- {{ SQLite | PostgreSQL | MongoDB | None | Other }}
- Naming convention: {{ snake_case | kebab-case | PascalCase | None | Other }}
- Main tables or collections: {{ users, products, orders | user, product, order }}
- PK Identifiers: {{ id, user_id | user }}
- FK Indexes: {{ user_id | user }}
- Auditing: {{ created_at, updated_at | createdAt, updatedAt | none }}

}

@if(has integrations) {

## Integrations

- {{ External_API | None | Other }}
- {{ Stripe | None | Other }}
- {{ Google_Maps | None | Other }}
- {{ OpenAI | None | Other }}
- {{ None | Other }}

}

## Diagram

```mermaid
{{ A container level C4 diagram }}
```

_End of System Architecture Document for {{ Project Name }}_
