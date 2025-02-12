---
information: Generate a markdown file documenting a feature.
file_name: 01-asset-entry.feature.md
---

# Feature: **Asset Entry**

## Description

Asset Entry allows users to record their financial asset details including asset name, quantity, value, acquisition date, and category, forming the basis for accurately tracking and managing their investment portfolio.

## Involved Data Models

The following data models play a role in this feature:

- **Asset**: Represents an investment asset owned by a user, containing essential details such as name, value, quantity, and acquisition date.
- **Category**: Categorizes assets based on their type, enabling structured portfolio organization.
- **User**: Represents the private investor that owns the asset and links the asset entry to the user profile.

## Acceptance Criteria (in Gherkin Syntax)

```gherkin
Feature: Asset Entry
  As a Private Investor
  I want to record new investment assets with detailed information
  So that I can accurately track and manage my portfolio

  Scenario: Successful asset entry creation
    Given a logged in private investor on the asset entry page
    When the investor fills in valid asset details (name, quantity, value, acquisition date, category) and submits the form
    Then a new asset record is created and the investor receives a confirmation message
```

## Additional Information

- **Dependencies**:
  - User authentication must be in place.
  - A valid list of asset categories should be available.
- **Preconditions**:
  - The user must be logged in.
- **Notes**:
  - This feature lays the foundation for asset management and is integral to the overall portfolio tracking functionality.

_End of Feature Documentation for Asset Entry_
