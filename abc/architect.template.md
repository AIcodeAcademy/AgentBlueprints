---
information: Generate a md file with the architecture blueprint based on this template.
defaults: the first option is the default.
features: up to three must have prioritized features.
feature_name: Name each feature with the following format `1_feature_one` `2_feature_two` `3_feature_three` etc.
feature_description: One or two sentences that describe the feature.
metadata: ask for name and link of author and company.
---

# Architecture Blueprint for **{{ Project Name }}**

**{{ Project Name }}** is a {{ type of application }} for {{ target audience }} that _{{ application purpose }}_

## Main Features

    @for(feature of features) {

1. `f#1_short-feature-name`

   - {{ Description of the feature }}

   }

## Specifications

- **Interaction**: {{ Web | Mobile | Desktop | API | CLI | Other}}
- **Architecture**: {{ Monolithic | Frontend_Backend | Other}}
- **Database**: {{ None | Relational | NoSQL | Other}}
- **Authentication**: {{ None | JWT |  Other}}
- **Integrations**: {{ None | External_API | Other}}
- **Presentation**: {{ Responsive | Dark_Mode | Colors(lime, cyan) | Fonts(tomorrow, fira-mono) }}

## Tech Stack

- **Frontend**: {{ Vite_Vanilla_TS | Astro_CMS | Angular_SPA | None | Other }}
- **Backend**: {{ Bun_Vanilla_TS | Node_Express | None | Other }}
- **Database**: {{ SQLite | PostgreSQL | MongoDB | None | Other }}
- **E2E Testing**: {{ Playwright | Cypress | None | Other }}
- **Code Quality**: {{ Biome |EsLint_Prettier | None | Other }}
- **Styles**: {{ PicoCSS | None | Other }}

## Metadata

- **Date**: {{ Current date }}
- **Author**: {{ [Author Name](Author Link) }} , {{ [Author Email](Author Email address) }}
- **Company**: {{ [Company Name](Company Link) }} , {{ [Company Email](Company Email address) }}

_End of Architecture Document for {{ Project Name }}_
