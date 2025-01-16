# Requirements for Assets Board

A web application to manage personal financial assets and provide summaries of investments and savings.

## Application

- **Name**: Assets Board
- **Type of Application**: Web application
- **Purpose**: Manage financial assets and get summaries of investments and savings
- **Audience**: Personal

## Data

- **Data Structure**:
  - Categories:
    - Name
    - Liquidity flag
    - Risk flag
  - Assets:
    - Category (linked to Categories entity)
    - Name
    - Units
    - Value
    - Date
- **Data Input**: Manual input
- **Data Output**: Saved in local storage as JSON serialized objects

## Technical

- **Security**: None
- **Styling**:  
  - Framework: PicoCSS  
  - Fonts: Major Mono Display (Logo), Tomorrow (Headers), Fira Code (Data)  
  - Colors: #47d469 (Primary), #33c1ee (Accent)
- **Tech stack**: TypeScript, Web components, Vite, Playwright, PicoCSS (no other framework)

## Features

- **Must have**:
  - Add, edit, and delete categories
  - Add, edit, and delete assets
  - View summaries of financial assets and categories
- **Nice to have**:
  - Simple bar chart (or progress bar) to display percentages in summaries for categories, liquidity, and risks
  - Export/Import all data as CSV

## User Experience

- Single-page layout (no routing)
- Use modals for user actions such as adding and editing forms

## Summary

**Assets Board** is a single-page web application for personal use that helps manage financial assets and provides summaries of investments and savings. The app will use manual input for data and store it in local storage as JSON serialized objects. It will feature modals for user actions, responsive design, and optional bar charts for visual summaries. Data export and import as CSV will also be included as a nice-to-have feature.

