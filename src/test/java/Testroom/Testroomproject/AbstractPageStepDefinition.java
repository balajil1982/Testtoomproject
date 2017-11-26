	package Testroom.Testroomproject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public abstract class AbstractPageStepDefinition {

protected static WebDriver driver;
	
	protected WebDriver getDriver()
	{
		if(driver == null){
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\m1034519\\workspace\\Budgetpoc\\lib\\chromedriver_win32\\chromedriver.exe");
			driver = new ChromeDriver();
			
		}
		return driver;
	}

	public void myTest(){
		System.out.println("this is test");
	}
}