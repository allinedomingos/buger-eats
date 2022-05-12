# Automated testing in QA Ninja's Burger Eats app.

Automation project used Cypress with Cucumber.

# Requirements

* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Cucumber](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)


# Command for installation

- `npm install --save-dev cypress@9.2.1 cypress-cucumber-preprocessor`

# In the package.json file add the path configuration for the steps and execution command:

```
{
  "scripts": {
        "test": "npx cypress run"
    },
  "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
    }
}
```
# Run cypress for the first time to create the folders

- `npx cypress open`

# Add to cypress.json file the configuration below:
```

{
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "baseUrl":"https://buger-eats-qa.vercel.app/",
  "chromeWebSecurity": false
 
}

```

# Configure cucumber module in index.js file (cypress/plugins/index.js) and add the check below:

```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

```

# Add import to library cypress-file-upload in commands.js:

```
import 'cypress-file-upload';

```

# Other libraries needed
- `npm install --save-dev cypress-file-upload`
- `npm i faker-br --save-dev`
- `npm i faker@5.5.3 --save-dev`
