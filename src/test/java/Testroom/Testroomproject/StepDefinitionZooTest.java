package Testroom.Testroomproject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionZooTest extends AbstractPageStepDefinition{
	 
	WebDriver driver = getDriver();

		
	@Given("^User is on Zoo site$")
	public void user_is_on_Zoo_site() throws Exception {
	    driver.navigate().to("http://www.thetestroom.com/webapp/index.html");
	}

	@When("^I click on \"([^\"]*)\"$")
	public void i_click_on(String link) throws Exception {
		driver.findElement(By.id("contact_link")).click();
		
	}

	@And("^I enter \"([^\"]*)\" into the name field$")
	public void i_enter_into_the_name_field(String value) throws Throwable {
	   driver.findElement(By.name("name_field")).sendKeys(value);
	}

	@And("^I enter \"([^\"]*)\" into the address field$")
	public void i_enter_into_the_address_field(String value) throws Throwable {
		 driver.findElement(By.name("address_field")).sendKeys(value);
	}

	@And("^I enter \"([^\"]*)\" into the postcode field$")
	public void i_enter_into_the_postcode_field(String value) throws Throwable {
		 driver.findElement(By.name("postcode_field")).sendKeys(value);
	}

	@And("^I enter \"([^\"]*)\" into the email field$")
	public void i_enter_into_the_email_field(String value) throws Throwable {
		driver.findElement(By.name("email_field")).sendKeys(value);
	}

	@And("^I submit the contact form$")
	public void i_submit_the_contact_form() throws Throwable {
		driver.findElement(By.id("submit_message")).click();
	}

	@Then("^I check I am on the confirmation page$")
	public void i_check_I_am_on_the_confirmation_page() throws Throwable {
	 Assert.assertTrue(driver.findElement(By.cssSelector(".content h1")).getText().contains("We have your message"));
	}

	
	
}
