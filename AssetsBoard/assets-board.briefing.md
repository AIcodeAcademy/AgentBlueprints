#   AssetsBoard Briefing

AssetsBoard is a client-only web application designed for managing personal investments and finances.

## Application
- **Name**: AssetsBoard
- **Type of Application**: Client-only web app
- **Purpose**: Help manage personal investments and finances
- **Audience**: Personal use
- **Must-have features**:
  - Categorize assets
  - Update asset values
  - View summaries

## Context diagram

```mermaid
C4Context
    title AssetsBoard System Context

    Person(user, "Personal User", "An individual managing their personal investments and finances")
    
    System(assetsBoard, "AssetsBoard", "A client-only web application for managing personal investments and finances. Allows users to categorize assets, update values, and view summaries.")

    System_Ext(browser, "Web Browser", "Local storage and runtime environment")
    
    Rel(user, assetsBoard, "Uses to manage investments and track finances")
    Rel(assetsBoard, browser, "Runs within and uses local storage")

```

## Summary

AssetsBoard is a client-only web application for personal use that helps users manage their investments and finances.

AssetsBoard must allow:

- 1 - As a user, I want to categorize assets so that I can organize my investments effectively.
- 2 - As a user, I want to update asset values so that I can keep my financial records accurate.
- 3 - As a user, I want to view summaries so that I can track my overall financial position.




