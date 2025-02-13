---
information: Generate a md file with the system architecture based on this template.
defaults: the first option is the default.
container: A piece of deployable software, frontend, backend, database, etc.
diagram: Container C4 Diagram that displays the web application, database, and API services, highlighting their interactions.
samples: this document contains samples as md comments, use them as reference to fill the template.
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

- **Software Architecture**: {{ Layered | Clean | Hexagonal | None | Other }}
- **Programming Paradigm**: {{ Functional | Object-Oriented | None | Other }}
- **Folder Structure**:

<!-- Propose a folder structure for the frontend like this:
  ```
  - src/
    - app/ (pages and repositories)
    - models/ (data models)
    - utils/ (helpers and shared components)
  ```
 -->

### Presentation

- **Front runtime**: {{ SPAs | SSR | Static | None | Other }}
- **Interactions**: {{ Routes , Modals , None , Other }}
- **Style**: {{ Responsive | Dark_Mode | Minimalist | None | Other }}
- **Colors** : {{ Lime | Cyan | Other }}
- **Fonts** : {{ Tomorrow | Fira_Mono | Other }}

}

@if(has backend) {

## Backend

### Tech Stack

- **Language**: {{ TypeScript | JavaScript | Go | None | Other }}
- **Framework**: {{ Bun_Vanilla_TS | Node_Express | None | Other }}

### Architecture

- **Software Architecture**: {{ Layered | Clean | Hexagonal | None | Other }}
- **Programming Paradigm**: {{ Functional | Object-Oriented | None | Other }}
- **Folder Structure**:

<!-- Propose a folder structure for the frontend like this:
  ```
  - src/
    - api/ (controllers and repositories)
    - models/ (data models)
    - utils/ (helpers)
  ```
 -->

### Authentication

- **Authentication**: {{ JWT | None | Other }}

}

@if(has database) {

### Database

- **Database Type**: {{ Relational | NoSQL | None | Other }}
- **Database**: {{ SQLite | PostgreSQL | MongoDB | None | Other }}
- **Naming Convention**: {{ snake_case | kebab-case | PascalCase | None | Other }}
- **Tables or Collections**: {{ plural | singular }}
- **PK Identifiers**: {{ id, user_id | user }}
- **FK Indexes**: {{ user_id | user }}
- **Auditing**: {{ created_at, updated_at | none }}
- **Soft Delete**: {{ deleted_at | false }}

}

@if(has integrations) {

## Integrations

- **External API**: {{ External_API | None | Other }}
- **Payments**: {{ Stripe | None | Other }}
- **AI**: {{ OpenAI | None | Other }}
- **Other**: {{ None | Other }}

}

## Diagram

```mermaid
{{ A container level C4 diagram }}
```

_End of System Architecture Document for {{ Project Name }}_
