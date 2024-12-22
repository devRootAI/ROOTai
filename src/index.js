const { getJsonUrl, getUserInputs } = require('./prompts');
const fetchJSON = require('./fetchJSON');
const generateCode = require('./openaiGenerator');
const writeFiles = require('./fileWriter');
const path = require('path');
const config = require('../config/config');

async function main() {
  try {
    // Step 1: Get the OpenAI JSON URL
    const jsonUrl = await getJsonUrl();
    const apiDocumentation = await fetchJSON(jsonUrl);

    // Step 2: Gather details about what the user wants to build
    const { buildDescription, language, appName } = await getUserInputs();

    // Step 3: Generate code using OpenAI
    const generatedCode = await generateCode(apiDocumentation, buildDescription, language, appName);

    // Step 4: Write generated code to output folder
    const outputDir = path.join(__dirname, config.outputDirectory, appName);
    await writeFiles(outputDir, appName, language, generatedCode);

    console.log(`Application "${appName}" has been generated in the "output" folder.`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();