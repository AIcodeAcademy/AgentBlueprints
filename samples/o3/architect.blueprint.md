# Architecture Blueprint for **AssetsBoard**

**AssetsBoard** is a Web Application for private investors that _to categorize and summarize investments_

## Main Features

1. `f#1_add-new-categorized-asset`

   - Allows users to add a new asset entry with specified value, quantity, and acquisition date, ensuring accurate portfolio tracking.

2. `f#2_update-asset`

   - Allows users to modify existing asset entries for real-time portfolio management updates.

3. `f#3_view-categorized-summaries`
   - Displays organized summaries of asset values by category, enabling users to quickly grasp the overall performance.

## Specifications

- **Interaction**: Web
- **Architecture**: Frontend_Backend
- **Database**: Relational
- **Authentication**: None
- **Integrations**: None
- **Presentation**: Responsive, Dark_Mode switch, Colors(lime, cyan), and Fonts(tomorrow, fira-mono)

## Tech Stack

- **Frontend**: Vanilla HTML CSS TS
- **Backend**: Bun Vanilla TS
- **Database**: SQLite
- **E2E Testing**: Playwright
- **Code Quality**: Biome
- **Styles**: PicoCSS

## Metadata

- **Date**: 2023-10-11
- **Author**: [Alberto Basalo](https://albertobasalo.dev) , [albertobasalo@aicode-academy](albertobasalo@aicode-academy)
- **Company**: [AI code Academy](https://aicode.academy)

_End of Architecture Document for AssetsBoard_
