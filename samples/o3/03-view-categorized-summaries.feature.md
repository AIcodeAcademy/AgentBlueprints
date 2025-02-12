# Feature: **View Categorized Summaries**

## Description

This feature provides a categorized summary view of the investment assets, enabling the private investor to quickly grasp overall portfolio performance. The system aggregates asset values and counts based on their categories to deliver insightful summaries.

## Involved Data Models

The following data models play a role in this feature:

- **Asset**: Represents an investment asset with details such as value and quantity, which are essential for generating aggregated metrics.
- **Category**: Classifies assets, allowing grouping and summarization by type.

## Acceptance Criteria (in Gherkin Syntax)

```gherkin
Feature: View Categorized Summaries
  As a private investor
  I want to view categorized summaries of my assets
  So that I can quickly understand the performance of each category

  Scenario: Display categorized summary
    Given the user is logged in and on the dashboard
    When the system aggregates and groups asset data by category
    Then the dashboard displays summaries showing total asset values and counts for each category
```

## Additional Information

- **Dependencies**: Backend API endpoints for retrieving aggregated asset and category data.
- **Preconditions**: The user must be authenticated and have recorded assets in their portfolio.
- **Notes**: Categories without any assets should either be hidden or clearly indicated. The dashboard should appropriately refresh the data on load or upon manual request.

_End of Feature Documentation for View Categorized Summaries_
