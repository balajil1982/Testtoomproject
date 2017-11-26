Feature: Check the page title using ScenarioOutline
					
Scenario Outline: Check page title
	Given I am in Zoo website
	When I click on <Link>
	Then I check I am on <Title>
	Examples:
	|Link|Title|
	|adoption_link|Adoption|
	|about_link|About|
	|contact_link|Contact|