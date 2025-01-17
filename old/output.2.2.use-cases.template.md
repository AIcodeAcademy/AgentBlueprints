# AppName Use cases

This document outlines the feature use cases for the [AppName]

## Feature 1

Description of the feature.

```gherkin
Feature: <Feature Name>

  This feature describes the functionality of <briefly describe the feature's purpose>.

  Scenario: <Scenario Name>
    Given <precondition 1>
    And <precondition 2> 
    When <user action>
    Then <expected outcome 1>
    And <expected outcome 2>

  Scenario Outline: <Scenario Outline Name>
    Given <precondition 1> with <parameter 1>
    And <precondition 2> with <parameter 2>
    When <user action> with <parameter 3>
    Then <expected outcome 1> with <parameter 4>
    Examples:
      | parameter 1 | parameter 2 | parameter 3 | parameter 4 |
      | value 1     | value 2     | value 3     | value 4     |
      | value 5     | value 6     | value 7     | value 8     |
```
