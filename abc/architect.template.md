---
information: You must fill the {{ information placeholder }}
options: separated by pipes like this, option_one | option_two | option_three | ...
multi_select: separated by commas like this, option_one, option_two, option_three, ...
defaults: the first option is the default.
features: up to three must have prioritized features.
feature_name: Name each feature with the following format `1_feature_one` `2_feature_two` `3_feature_three` etc.
feature_description: One or two sentences that describe the feature.
metadata: ask for name and link of author and company.
---

# Architecture Blueprint for **{{ Project Name }}**

**{{ Project Name }}** is a `{{ type of application }}` for {{ target audience }} that {{ application purpose }}.

## Main Features

1. `1_feature_one`

   - {{ Description of the feature }}

2. `2_feature_two`

   - {{ Description of the feature }}

## Specifications

- **Interaction**: {{ Web | Mobile | Desktop | API | CLI | Other}}
- **Architecture**: {{ Monolithic | Frontend_Backend | Other}}
- **Database**: {{ None | Relational | NoSQL | Other}}
- **Authentication**: {{ None | JWT |  Other}}
- **Integrations**: {{ None | API_externa | Other}}
- **Presentation**: {{ responsive , dark_mode , colors(lime, cyan), fonts (tomorrow, fira-mono) }}

## Tech Stack

- **Frontend**: TypeScript + {{ Vite (simple) | Astro (CMS) | Angular (SPA) | Other }}
- **Backend**: TypeScript + {{ Node_Express(standard) | Bun_Hono(speed) | Other }}
- **Database**: {{ None | PostgreSQL | MongoDB | Other }}
- **E2E Testing**: {{ Playwright | Cypress |  Other }}
- **Code Quality**: {{ EsLint_Prettier |  Biome |  Other }}
- **Styles**: {{ PicoCSS | None | Other }}

## Metadata

- **Date**: {{ Current date }}
- **Author**: {{[Author Name](Author Link)}}
- **Company**: {{[Company Name](Company Link)}}

_End of Architecture Document for {{ Project Name }}_
