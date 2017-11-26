Feature: To submit a valid contact form 

Scenario: Submit form using valid data 
	Given I am on the Zoo site 
	When I navigate to Contact 
	And I submit the form with valid data 
		|Fields  |Value                        |
		|Name    |Jack Joe                     |
		|Address |Happy Land                   |
		|Postcode|A1 S22                       |
		|Email   |iwillsubscribe@toThis.channel|
	Then I check that the form is submitted 
	
		