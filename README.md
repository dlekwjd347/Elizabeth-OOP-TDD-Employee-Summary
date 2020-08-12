# Unit 10 OOP Homework: Template Engine - Employee Summary

For this assignment, my challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, I will also be ensuring that all unit tests pass.


## Instructions

I built a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Delivery

* [Inquirer npm package] to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* My app will run as a Node CLI to gather information about each employee.

* Below is what my application looks like.

![Employee Summary 1](Assets\screenshots\DeployedHTML.JPG)


The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.


## Workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

🎗 Run the tests at any time with `npm run test`

### Classes
The project will have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

### User input

The project will prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project will generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member will be displayed in no particular order.


## Submission on BCS

* The URL of the GitHub repository: https://github.com/dlekwjd347/Elizabeth-OOP-TDD-Employee-Summary

* A video demonstrating the entirety of the app's functionality 

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
