# Architecture Blueprint for **AssetsBoard**

**AssetsBoard** is a web application for private investors that _enables them to categorize and summarize their financial assets_

## Main Features

1. `f1_manual_asset_entry`

   - Simple form-based creation of assets with basic fields (name, type, quantity, acquisition date) and category selection (stocks/real estate/crypto)

2. `f2_current_value_tracking`

   - Edit current quantity and market value without version history, with simple date-picker for latest update

3. `f3_text_based_summaries`
   - Tabular overview showing categorized totals (e.g. "Stocks: 15 items, $245k total") and simple net worth calculation

## Specifications

- **Interaction**: Web
- **Architecture**: Frontend_Backend
- **Database**: SQLite
- **Authentication**: None
- **Integrations**: None
- **Presentation**: Responsive

## Tech Stack

- **Frontend**: Bun_Vanilla_TS
- **Backend**: Bun_Vanilla_TS
- **Database**: SQLite
- **E2E Testing**: Playwright
- **Code Quality**: Biome
- **Styles**: PicoCSS

## Metadata

- **Date**: 2024-03-15
- **Author**: [Alberto Basalo](https://albertobasalo.dev), [albertobasalo@aicode-academy](mailto:albertobasalo@aicode-academy)
- **Company**: [AI Code Academy](https://aicode.academy), [info@aicode.academy](mailto:info@aicode.academy)

_End of Architecture Document for AssetsBoard_
