const inquirer = require('inquirer');

async function getJsonUrl() {
  const { jsonUrl } = await inquirer.prompt([
    { type: 'input', name: 'jsonUrl', message: 'Enter the openai.json URL:' },
  ]);
  return jsonUrl;
}

async function getUserInputs() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'buildDescription',
      message: 'What do you want to build? (e.g., "A chatbot that helps users schedule meetings")',
    },
    {
      type: 'list',
      name: 'language',
      message: 'What programming language do you want to use?',
      choices: ['JavaScript', 'Python', 'Go', 'Java'],
    },
    {
      type: 'input',
      name: 'appName',
      message: 'What is the name of your application?',
    },
  ]);
}

module.exports = { getJsonUrl, getUserInputs };