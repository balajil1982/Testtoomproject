package Testroom.Testroomproject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionPageTitle extends AbstractPageStepDefinition{

	   WebDriver driver = getDriver();

	@Given("^User is on Zoo website$")
	public void user_is_on_Zoo_website() throws Throwable {
		driver.navigate().to("http://www.thetestroom.com/webapp/index.html");

	}

	@When("^I navigate to Adoption page$")
	public void i_navigate_to_Adoption_page() throws Throwable {
		driver.findElement(By.id("adoption_link")).click();
	}

	@Then("^I check page title as Adoption$")
	public void i_check_page_title_as_Adoption() throws Throwable {
		 Assert.assertTrue(driver.getTitle().contains("Adoption"));
	}

	@When("^I navigate to About page$")
	public void i_navigate_to_About_page() throws Throwable {
		driver.findElement(By.id("about_link")).click();
	}

	@Then("^I check page title as About$")
	public void i_check_page_title_as_About() throws Throwable {
		 Assert.assertTrue(driver.getTitle().contains("About Zoo"));
	}

	@When("^I navigate to Contact page$")
	public void i_navigate_to_Contact_page() throws Throwable {
		driver.findElement(By.id("contact_link")).click();
	}

	@Then("^I check page title as Contact$")
	public void i_check_page_title_as_Contact() throws Throwable {
		 Assert.assertTrue(driver.getTitle().contains("Contact"));
	}

}