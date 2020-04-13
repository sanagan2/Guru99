$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Reset functionality on login page of Application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the Username \u003cusername\u003e and Password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;1"
    },
    {
      "cells": [
        "User1",
        "password1"
      ],
      "line": 10,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;2"
    },
    {
      "cells": [
        "User2",
        "password2"
      ],
      "line": 11,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;3"
    },
    {
      "cells": [
        "User3",
        "password3"
      ],
      "line": 12,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the Username User1 and Password password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.open_the_chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 21193292100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "1",
      "offset": 46
    }
  ],
  "location": "StepDefination.enter_the_Username_User_and_Password_password(String,String)"
});
formatter.result({
  "duration": 373127400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.reset_the_credential()"
});
formatter.result({
  "duration": 858646000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the Username User2 and Password password2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.open_the_chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 20648440900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 46
    }
  ],
  "location": "StepDefination.enter_the_Username_User_and_Password_password(String,String)"
});
formatter.result({
  "duration": 418277100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.reset_the_credential()"
});
formatter.result({
  "duration": 1622830200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the Username User3 and Password password3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.open_the_chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 17846107600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    },
    {
      "val": "3",
      "offset": 46
    }
  ],
  "location": "StepDefination.enter_the_Username_User_and_Password_password(String,String)"
});
formatter.result({
  "duration": 285571800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.reset_the_credential()"
});
formatter.result({
  "duration": 818255000,
  "status": "passed"
});
});