Feature: register 


Scenario: access registration form

    Given I'm on the start screen
    When I click on register button
    Then I'm directed to the registration form


Scenario: successfully register

    Given I'm on to the registration form
    When I fill out a form with valid data
    Then I have my registration successfully completed.




