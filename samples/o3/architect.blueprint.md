# Architecture Blueprint for **AssetsBoard**

**AssetsBoard** is a web application for private investors that _enables them to categorize and summarize their financial assets_.

## Main Features

1. `f1_asset-entry`

   - Record financial assets with their categorization, quantity, and valuation at specific dates. This provides the foundation for accurate portfolio tracking.

2. `f2_asset-value-management`

   - Update and maintain asset quantities and valuations across different time points, ensuring historical tracking of portfolio changes.

3. `f3_portfolio-analytics`

   - Generate detailed summaries and breakdowns of total portfolio value with drill-down capabilities into individual assets and categories.

## Specifications

- **Interaction**: Web
- **Architecture**: Frontend_Backend
- **Database**: Relational
- **Authentication**: JWT
- **Integrations**: None
- **Presentation**: Responsive, Dark_Mode, Colors(lime, cyan), Fonts(tomorrow, fira-mono)

## Tech Stack

- **Frontend**: Bun_Vanilla_TS
- **Backend**: Bun_Vanilla_TS
- **Database**: SQLite
- **E2E Testing**: Playwright
- **Code Quality**: Biome
- **Styles**: PicoCSS

## Metadata

- **Date**: 2024-03-19
- **Author**: [Alberto Basalo](https://albertobasalo.dev), [albertobasalo@aicode-academy](albertobasalo@aicode-academy)
- **Company**: [AI code Academy](https://aicode.academy)

_End of Architecture Document for AssetsBoard_
