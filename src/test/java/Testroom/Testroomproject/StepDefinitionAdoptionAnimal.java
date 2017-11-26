package Testroom.Testroomproject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionAdoptionAnimal extends AbstractPageStepDefinition {

	 WebDriver driver = getDriver();

	@Given("^I am in the test room site$")
	public void i_am_in_the_test_room_site() throws Throwable {
		driver.navigate().to("http://www.thetestroom.com/webapp/index.html");
	}

	@When("^I click on Adoption link$")
	public void i_click_on_Adoption_link() throws Throwable {
	 driver.findElement(By.id("adoption_link")).click();
	}

	@When("^I Set the start date to \"([^\"]*)\"$")
	public void i_Select_Please_select_the_start_date_of_your_adoption(String dropdown) throws Throwable {
		Select dropdownstartdate = new Select(driver.findElement(By.id("start_select")));
		dropdownstartdate.selectByVisibleText(dropdown);
		
	}

	@When("^I click on 'Check' button$")
	public void i_click_on_Check_button() throws Throwable {
		driver.findElement(By.id("check_btn_02")).click();
	}

	@When("^I enter text into the field$")
	public void i_enter_text_into_the_field() throws Throwable {
		  driver.findElement(By.name("name_field")).sendKeys("Test");
		  driver.findElement(By.name("address_field")).sendKeys("Test123");
		  driver.findElement(By.name("postcode_field")).sendKeys("A1234");
		  driver.findElement(By.name("email_field")).sendKeys("value@mail.com");
	}


	@When("^I submit the 'Check' button$")
	public void i_submit_the_Check_button() throws Throwable {
		driver.findElement(By.id("submit_adoption")).click();
	}

	@Then("^I check message 'YOUR ADOPTION HAS BEEN SET UP'$")
	public void i_check_message_YOUR_ADOPTION_HAS_BEEN_SET_UP() throws Throwable {
		Assert.assertTrue(driver.findElement(By.cssSelector(".content p")).getText().contains("YOUR ADOPTION HAS BEEN SET UP"));
		
	}

}
