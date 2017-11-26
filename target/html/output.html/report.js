$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdoptionAnimal.feature");
formatter.feature({
  "line": 2,
  "name": "To check the adoption of animal today",
  "description": "",
  "id": "to-check-the-adoption-of-animal-today",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AdoptionAnimal"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "To verify user is able to check the adoption today",
  "description": "",
  "id": "to-check-the-adoption-of-animal-today;to-verify-user-is-able-to-check-the-adoption-today",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am in the test room site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \u0027Adoption\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Set the start date to \"Today\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Check\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter text into the field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I submit the \u0027Check\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I check message \u0027YOUR ADOPTION HAS BEEN SET UP\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_am_in_the_test_room_site()"
});
formatter.result({
  "duration": 7421685654,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 25
    }
  ],
  "location": "StepDefinitionAdoptionAnimal.i_Select_Please_select_the_start_date_of_your_adoption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_click_on_Check_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_enter_text_into_the_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_submit_the_Check_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_check_message_YOUR_ADOPTION_HAS_BEEN_SET_UP()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("PageTitle.feature");
formatter.feature({
  "line": 2,
  "name": "Check the page title",
  "description": "",
  "id": "check-the-page-title",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@pageTitle"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Zoo website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionPageTitle.user_is_on_Zoo_website()"
});
formatter.result({
  "duration": 2413941892,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Check page title for Adoption page",
  "description": "",
  "id": "check-the-page-title;check-page-title-for-adoption-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I navigate to Adoption page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I check page title as Adoption",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_navigate_to_Adoption_page()"
});
formatter.result({
  "duration": 1651749120,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_check_page_title_as_Adoption()"
});
formatter.result({
  "duration": 141740568,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Zoo website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionPageTitle.user_is_on_Zoo_website()"
});
formatter.result({
  "duration": 616566774,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check page title for About page",
  "description": "",
  "id": "check-the-page-title;check-page-title-for-about-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to About page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I check page title as About",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_navigate_to_About_page()"
});
formatter.result({
  "duration": 1303810258,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_check_page_title_as_About()"
});
formatter.result({
  "duration": 119016721,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Zoo website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionPageTitle.user_is_on_Zoo_website()"
});
formatter.result({
  "duration": 587993022,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check page title for Contact page",
  "description": "",
  "id": "check-the-page-title;check-page-title-for-contact-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I navigate to Contact page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I check page title as Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_navigate_to_Contact_page()"
});
formatter.result({
  "duration": 1868267367,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_check_page_title_as_Contact()"
});
formatter.result({
  "duration": 76501160,
  "status": "passed"
});
formatter.uri("ScenarioDataTables.feature");
formatter.feature({
  "line": 1,
  "name": "To submit a valid contact form",
  "description": "",
  "id": "to-submit-a-valid-contact-form",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Submit form using valid data",
  "description": "",
  "id": "to-submit-a-valid-contact-form;submit-form-using-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Contact",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I submit the form with valid data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Value"
      ],
      "line": 7
    },
    {
      "cells": [
        "Name",
        "Jack Joe"
      ],
      "line": 8
    },
    {
      "cells": [
        "Address",
        "Happy Land"
      ],
      "line": 9
    },
    {
      "cells": [
        "Postcode",
        "A1 S22"
      ],
      "line": 10
    },
    {
      "cells": [
        "Email",
        "iwillsubscribe@toThis.channel"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I check that the form is submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionScenarioDataTable.i_am_on_the_Zoo_site()"
});
formatter.result({
  "duration": 1647696599,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionScenarioDataTable.i_navigate_to_Contact()"
});
formatter.result({
  "duration": 1315179572,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionScenarioDataTable.i_submit_the_form_with_valid_data(DataTable)"
});
formatter.result({
  "duration": 2569439934,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionScenarioDataTable.i_check_that_the_form_is_submitted()"
});
formatter.result({
  "duration": 45258845,
  "status": "passed"
});
formatter.uri("ScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Check the page title using ScenarioOutline",
  "description": "",
  "id": "check-the-page-title-using-scenariooutline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check page title",
  "description": "",
  "id": "check-the-page-title-using-scenariooutline;check-page-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am in Zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \u003cLink\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on \u003cTitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "check-the-page-title-using-scenariooutline;check-page-title;",
  "rows": [
    {
      "cells": [
        "Link",
        "Title"
      ],
      "line": 8,
      "id": "check-the-page-title-using-scenariooutline;check-page-title;;1"
    },
    {
      "cells": [
        "adoption_link",
        "Adoption"
      ],
      "line": 9,
      "id": "check-the-page-title-using-scenariooutline;check-page-title;;2"
    },
    {
      "cells": [
        "about_link",
        "About"
      ],
      "line": 10,
      "id": "check-the-page-title-using-scenariooutline;check-page-title;;3"
    },
    {
      "cells": [
        "contact_link",
        "Contact"
      ],
      "line": 11,
      "id": "check-the-page-title-using-scenariooutline;check-page-title;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Check page title",
  "description": "",
  "id": "check-the-page-title-using-scenariooutline;check-page-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am in Zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on adoption_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on Adoption",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionScenarioOutline.i_am_in_Zoo_website()"
});
formatter.result({
  "duration": 989824971,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "Check page title",
  "description": "",
  "id": "check-the-page-title-using-scenariooutline;check-page-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am in Zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on about_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on About",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionScenarioOutline.i_am_in_Zoo_website()"
});
formatter.result({
  "duration": 1115045076,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Check page title",
  "description": "",
  "id": "check-the-page-title-using-scenariooutline;check-page-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am in Zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on contact_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on Contact",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionScenarioOutline.i_am_in_Zoo_website()"
});
formatter.result({
  "duration": 881416408,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("ZooTest.feature");
formatter.feature({
  "line": 1,
  "name": "To test the hight functionality of zoo test",
  "description": "",
  "id": "to-test-the-hight-functionality-of-zoo-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To populate the contact form",
  "description": "",
  "id": "to-test-the-hight-functionality-of-zoo-test;to-populate-the-contact-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Zoo site page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"Contact\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"Name test\" into the name field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Address test\" into the address field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"Postcode test\" into the postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Email test\" into the email field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I submit the contact form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I check I am on the confirmation page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 12
    }
  ],
  "location": "StepDefinitionZooTest.i_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionZooTest.i_enter_into_the_name_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Address test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionZooTest.i_enter_into_the_address_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Postcode test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionZooTest.i_enter_into_the_postcode_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email test",
      "offset": 9
    }
  ],
  "location": "StepDefinitionZooTest.i_enter_into_the_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionZooTest.i_submit_the_contact_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionZooTest.i_check_I_am_on_the_confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
});