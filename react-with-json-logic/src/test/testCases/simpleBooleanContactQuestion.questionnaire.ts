import { Questionnaire, QuestionType } from "../../models/Questionnaire";

const testQuestionnaire: Questionnaire = {
  id: "simpleBooleanContactQuestion",
  schemaVersion: "1",
  version: "1",
  meta: {
    author: "Someone",
    language: "DE",
    title: "Simple boolean contact question",
    creationDate: "2020-04-10T18:48:48+0000",
  },
  questions: [
    {
      id: "q1_contact",
      text: "Gab es Kontakt zu bestätigten Fällen?",
      type: QuestionType.Boolean,
    },
  ],
  variables: [],
  resultCategories: [
    {
      id: "rc_contact",
      description: "Kontakt",
      results: [
        {
          id: "CONTACT_YES",
          text: "Sie hatten Kontakt.",
          value: {
            var: "q1_contact.value",
          },
        },
        {
          id: "CONTACT_NO",
          text: "Sie hatten keinen Kontakt.",
          value: {
            "!": {
              var: "q1_contact.value",
            },
          },
        },
      ],
    },
  ],
};
export default testQuestionnaire;
