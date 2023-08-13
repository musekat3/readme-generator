// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'projectName',
    message: 'Enter the name of your project:',
  },
  {
    name: 'description',
    message: 'Enter a brief description of your project:',
  },
  {
    name: 'installationSteps',
    message: 'Enter the installation steps for your project:',
  },
  {
    name: 'usageSteps',
    message: 'Enter the usage steps for your project:',
  },
  {
    name: 'licenseName',
    message: 'Enter the name of the license for your project:',
  },
  {
    name: 'licenseLink',
    message: 'Enter the link to the license for your project:',
  },
];

// TODO: Define the writeToFile function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing ${fileName} file:`, err);
    } else {
      console.log(`${fileName} file created successfully.`);
    }
  });
}

// TODO: Define the generateReadme function
function generateReadme(projectName, description, installationSteps, usageSteps, licenseName, licenseLink) {
    return `# ${projectName}
  
  ## Description
  
  ${description}
  
  ## Installation
  
  ${installationSteps}
  
  ## Usage
  
  ${usageSteps}
  
  ## License
  
  [${licenseName}](${licenseLink})
  `;
  }

// TODO: Define the generateIndexFileContent function
function generateIndexFileContent() {
  // Implementation goes here
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const { projectName, description, installationSteps, usageSteps, licenseName, licenseLink } = answers;

    const readmeContent = generateReadme(projectName, description, installationSteps, usageSteps, licenseName, licenseLink);
    const indexFileContent = generateIndexFileContent();

    writeToFile('README.md', readmeContent);
    writeToFile('index.js', indexFileContent);
  });
}

// Call the init function to start the app
init();
