package Testroom.Testroomproject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionScenarioOutline extends AbstractPageStepDefinition{

	   WebDriver driver = getDriver();

	@Given("^I am in Zoo website$")
	public void i_am_in_Zoo_website() throws Throwable {
		driver.navigate().to("http://www.thetestroom.com/webapp/index.html");

	}

	@When("^I click on([^\"])$")
	public void iclickonContact(String link) throws Throwable {
		driver.findElement(By.id("contact_link")).click();
	}

	@Then("^I check I am on([^\"]) $")
	public void i_check_page_title_as_Contact(String title) throws Throwable {
		 Assert.assertTrue(driver.getTitle().contains("Contact"));
	}

}