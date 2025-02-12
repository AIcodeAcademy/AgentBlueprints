# Feature: **Add New Categorized Asset**

## Description

This feature allows the user to add a new asset to their portfolio by entering essential asset details such as name, value, quantity, acquisition date, and selecting a category. The system validates the input and ensures the asset is accurately recorded for portfolio tracking.

## Involved Data Models

The following data models play a role in this feature:

- **Asset**: Represents an investment asset owned by a user, capturing essential details such as name, value, quantity, and acquisition date.
- **Category**: Categorizes assets based on their type, ensuring each asset is correctly classified.

## Acceptance Criteria (in Gherkin Syntax)

```gherkin
Feature: Add New Categorized Asset
  As a private investor
  I want to add a new categorized asset
  So that my portfolio is accurately updated

  Scenario: Successfully add a new asset
    Given the user is logged in and on the "Add Asset" page
    When the user enters valid asset details including name, value, quantity, acquisition date, and selects a category
    Then the asset is successfully added and visible in the portfolio list
```

## Additional Information

- **Dependencies**: Backend API endpoint for asset creation.
- **Preconditions**: User must be logged in and have access to the asset addition form.
- **Notes**: Ensure proper validation of numeric inputs and dates. UI feedback should be provided for both successful and failed asset addition attempts.

_End of Feature Documentation for Add New Categorized Asset_
