@AdoptionAnimal
Feature: To check the adoption of animal today
 
Scenario: To verify user is able to check the adoption today
	Given I am in the test room site
	When I click on 'Adoption' link
	And I Set the start date to "Today"
	And I click on 'Check' button
	And I enter text into the field
	And I submit the 'Check' button
	Then I check message 'YOUR ADOPTION HAS BEEN SET UP'
	
			