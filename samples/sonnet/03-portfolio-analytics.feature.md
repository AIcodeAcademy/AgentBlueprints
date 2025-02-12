---
information: Generate a markdown file documenting a feature.
file_name: 03-portfolio-analytics.feature.md
---

# Feature: **Portfolio Analytics**

## Description

Portfolio Analytics enables investors to generate comprehensive summaries of their total portfolio value with detailed breakdowns. Users can analyze their investments through various dimensions including categories, risk levels, and liquidity, with the ability to drill down into individual assets for detailed analysis.

## Involved Data Models

The following data models play a role in this feature:

- **Asset**: Provides the current asset details and links to historical valuations.
- **Category**: Enables grouping and analysis of assets by type, risk, and liquidity.
- **Valuation**: Supplies historical value data for trend analysis and performance tracking.
- **User**: Defines the scope of the portfolio for the authenticated investor.

## Acceptance Criteria (in Gherkin Syntax)

```gherkin
Feature: Portfolio Analytics
  As a Private Investor
  I want to view detailed summaries and breakdowns of my portfolio
  So that I can understand my investment distribution and performance

  Scenario: View portfolio summary by category
    Given a logged in private investor with multiple assets
    When the investor requests the portfolio summary view
    Then the system displays the total portfolio value
    And shows value breakdowns by category
    And presents risk and liquidity distributions

  Scenario: Drill down into category details
    Given a portfolio summary is displayed
    When the investor selects a specific category
    Then the system shows all assets within that category
    And displays the category's total value and percentage of portfolio
```

## Additional Information

- **Dependencies**:
  - Asset and valuation data must be up to date
  - Category metadata (risk, liquidity) must be properly maintained
- **Preconditions**:
  - The user must be logged in
  - At least one asset must exist in the portfolio
- **Notes**:
  - All calculations should use the most recent valuation data
  - The system should handle empty categories gracefully
  - Performance metrics should be clearly labeled with their calculation date

_End of Feature Documentation for Portfolio Analytics_
