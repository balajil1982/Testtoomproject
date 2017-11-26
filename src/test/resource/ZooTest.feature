Feature: To test the hight functionality of zoo test 

Scenario: To populate the contact form 
	Given User is on Zoo site page 
	When I click on "Contact" 
	And I enter "Name test" into the name field 
	And I enter "Address test" into the address field 
	And I enter "Postcode test" into the postcode field 
	And I enter "Email test" into the email field 
	And I submit the contact form 
	Then I check I am on the confirmation page 
	
		