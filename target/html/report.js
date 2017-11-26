$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdoptionAnimal.feature");
formatter.feature({
  "line": 1,
  "name": "To check the adoption of animal today",
  "description": "",
  "id": "to-check-the-adoption-of-animal-today",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To verify user is able to check the adoption today",
  "description": "",
  "id": "to-check-the-adoption-of-animal-today;to-verify-user-is-able-to-check-the-adoption-today",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in the test room site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \u0027Adoption\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Set the start date to \"Today\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Check\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter text into the field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I submit the \u0027Check\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I check message \u0027YOUR ADOPTION HAS BEEN SET UP\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_am_in_the_test_room_site()"
});
formatter.result({
  "duration": 5686401861,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_click_on_Adoption_link()"
});
formatter.result({
  "duration": 2231764368,
  "status": "passed"
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
  "duration": 410898908,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_click_on_Check_button()"
});
formatter.result({
  "duration": 1222659228,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_enter_text_into_the_field()"
});
formatter.result({
  "duration": 1108743570,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_submit_the_Check_button()"
});
formatter.result({
  "duration": 1816343681,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionAdoptionAnimal.i_check_message_YOUR_ADOPTION_HAS_BEEN_SET_UP()"
});
formatter.result({
  "duration": 215251705,
  "status": "passed"
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
formatter.scenario({
  "line": 4,
  "name": "Check page title for Adoption page",
  "description": "",
  "id": "check-the-page-title;check-page-title-for-adoption-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Adoption page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check page title as Adoption",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPageTitle.user_is_on_Zoo_website()"
});
formatter.result({
  "duration": 1472442151,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_navigate_to_Adoption_page()"
});
formatter.result({
  "duration": 1345466952,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_check_page_title_as_Adoption()"
});
formatter.result({
  "duration": 108170445,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Check page title for About page",
  "description": "",
  "id": "check-the-page-title;check-page-title-for-about-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on Zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to About page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I check page title as About",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPageTitle.user_is_on_Zoo_website()"
});
formatter.result({
  "duration": 894687382,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_navigate_to_About_page()"
});
formatter.result({
  "duration": 1312481448,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_check_page_title_as_About()"
});
formatter.result({
  "duration": 99071052,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check page title for Contact page",
  "description": "",
  "id": "check-the-page-title;check-page-title-for-contact-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User is on Zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I navigate to Contact page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I check page title as Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionPageTitle.user_is_on_Zoo_website()"
});
formatter.result({
  "duration": 1392619245,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_navigate_to_Contact_page()"
});
formatter.result({
  "duration": 1909869458,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionPageTitle.i_check_page_title_as_Contact()"
});
formatter.result({
  "duration": 60529189,
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
  "duration": 1208852078,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionScenarioDataTable.i_navigate_to_Contact()"
});
formatter.result({
  "duration": 1363271610,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionScenarioDataTable.i_submit_the_form_with_valid_data(DataTable)"
});
formatter.result({
  "duration": 3197856363,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionScenarioDataTable.i_check_that_the_form_is_submitted()"
});
formatter.result({
  "duration": 88221903,
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
  "duration": 1505196515,
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
  "duration": 1405222257,
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
  "duration": 1140860353,
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
  "name": "User is on Zoo site",
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
formatter.match({
  "location": "StepDefinitionZooTest.user_is_on_Zoo_site()"
});
formatter.result({
  "duration": 1922190833,
  "status": "passed"
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
  "duration": 1497864123,
  "status": "passed"
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
  "duration": 320571303,
  "status": "passed"
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
  "duration": 287164166,
  "status": "passed"
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
  "duration": 315765835,
  "status": "passed"
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
  "duration": 263690247,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionZooTest.i_submit_the_contact_form()"
});
formatter.result({
  "duration": 1234838143,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionZooTest.i_check_I_am_on_the_confirmation_page()"
});
formatter.result({
  "duration": 1646612341,
  "status": "passed"
});
});