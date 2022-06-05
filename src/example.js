const inquirer = require("inquirer");
const questions = [
  {
    type: "input",
    name: "first_question",
    message: "Question with filtering and validating text",
    async validate() {
      await new Promise((r) => setTimeout(r, 1000));
      return true;
    },
    async filter(answer) {
      await new Promise((r) => setTimeout(r, 1000));
      return `filtered${answer}`;
    },
    filteringText: "Filtering your answer...",
    validatingText: "Validating what you wrote...",
  },
  {
    type: "input",
    name: "second_question",
    message: "Question without filtering and validating text",
    async validate() {
      await new Promise((r) => setTimeout(r, 1000));
      return true;
    },
    async filter(answer) {
      await new Promise((r) => setTimeout(r, 1000));
      return `filtered${answer}`;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});
