# TaskList Use cases

This document outlines the feature use cases for the TaskList

## Add a task

As a user, I want to add a task to the list so that I can keep track of it.

```gherkin
Feature: Add a task

  This feature describes the functionality of adding a task to the list.

  Scenario: Add a task
    Given I am on the TaskList homepage
    And I am logged in
    When I click on the "Add Task" button
    Then I see a form to add a new task
    And I can enter a task name
    And I can enter a task description
    And I can enter a task due date in the future
    And I can enter a task priority
    And I can click on the "Add" button
    Then I see the new task added to the list

  Scenario Outline: Failed to add a task  
    Given I am on the TaskList homepage
    And I am logged in
    When I click on the "Add Task" button
    Then I see a form to add a new task
    And I can enter a task name
    And I can enter a task description
    And I can enter a task due date in the past
    And I can enter a task priority
    And I can click on the "Add" button
    Then I see an error message "Due date cannot be in the past"
```

