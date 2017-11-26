package Testroom.Testroomproject;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionScenarioDataTable extends AbstractPageStepDefinition {

	WebDriver driver = getDriver();
	
	@Given("^I am on the Zoo site$")
	public void i_am_on_the_Zoo_site() throws Throwable {
        driver.navigate().to("http://www.thetestroom.com/webapp/index.html");
	}

	@When("^I navigate to Contact$")
	public void i_navigate_to_Contact() throws Throwable {
		driver.findElement(By.id("contact_link")).click(); 
	}

	@When("^I submit the form with valid data$")
	public void i_submit_the_form_with_valid_data(DataTable table) throws Throwable {
		//System.out.println("table");
		List<List<String>> data = table.raw();
		
		System.out.println(data.get(1).get(1));
		
		 driver.findElement(By.name("name_field")).sendKeys("name value");
		 driver.findElement(By.name("address_field")).sendKeys("address value");
		 driver.findElement(By.name("postcode_field")).sendKeys("postcode value");
		 driver.findElement(By.name("email_field")).sendKeys("email value");
		 driver.findElement(By.id("submit_message")).click();
	}

	@Then("^I check that the form is submitted$")
	public void i_check_that_the_form_is_submitted() throws Throwable {
		Assert.assertTrue(driver.getTitle().equals("Contact Confirmation"));
	  }


	}


