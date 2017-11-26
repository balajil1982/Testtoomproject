@pageTitle
Feature: Check the page title
 
 Background: 
 Given User is on Zoo website
 
Scenario: Check page title for Adoption page
	When I navigate to Adoption page
	Then I check page title as Adoption
	
			
Scenario: Check page title for About page
	When I navigate to About page
	Then I check page title as About
					
Scenario: Check page title for Contact page
	When I navigate to Contact page
	Then I check page title as Contact
	