package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions
(
		
		monochrome=true,
		features= {"Feature/Test.feature"},
		glue= {"main.java.com.ogs.jmh.StepDefination"}
		
		)

public class TestRunner {

}
