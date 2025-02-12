# Feature: **Update Asset**

## Description

This feature allows the user to update an existing asset by modifying details such as value, quantity, or acquisition date. It ensures that changes are accurately recorded, enabling real-time updates to the user's portfolio.

## Involved Data Models

The following data models play a role in this feature:

- **Asset**: Represents an investment asset owned by a user, capturing details like name, value, quantity, and acquisition date.

## Acceptance Criteria (in Gherkin Syntax)

```gherkin
Feature: Update Asset
  As a private investor
  I want to update an existing asset
  So that my portfolio reflects the latest changes

  Scenario: Successfully update an asset
    Given the user is logged in and viewing the asset details
    When the user edits asset details such as value, quantity, or acquisition date and saves the changes
    Then the asset is updated and the portfolio list displays the modified information
```

## Additional Information

- **Dependencies**: Backend API endpoint for asset updates.
- **Preconditions**: The asset to be updated must exist and the user must be authenticated.
- **Notes**: Make sure input validations are consistent and that any changes trigger UI feedback for success or error.

_End of Feature Documentation for Update Asset_
