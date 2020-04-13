package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
		features= {"Feature/Test.feature"},
				tags= {"@test"},
		glue= {"jmhdemo"},
		plugin = {	"html:Test_Report/CucumberReport/Scenario_01/html",
				"json:Test_Report/CucumberReport/Scenario_01/json/result.json",
				"junit:Test_Report/CucumberReport/Scenario_01/junit/result.xml"}
		
		)
public class testruns {

}
