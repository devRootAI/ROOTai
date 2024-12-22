const { Configuration, OpenAIApi } = require('openai');
const config = require('../config/config');

// Initialize OpenAI API using configuration
const openai = new OpenAIApi(
  new Configuration({
    apiKey: config.openaiApiKey,
  })
);

async function generateCode(apiDocumentation, buildDescription, language, appName) {
  const prompt = `
You are a coding assistant. Based on the following OpenAI JSON documentation:
${JSON.stringify(apiDocumentation)}

The user wants to build: "${buildDescription}"

Generate a complete ${language} application named "${appName}" that:
1. Implements the functionality described in the user request.
2. Uses the API endpoints and capabilities described in the JSON documentation.
3. Clearly handles any API limitations, informing the user when something is not possible.
4. Includes comments and explanations.
5. Uses best practices for ${language} development.

If something is not possible based on the documentation, explain why.
`;

  const response = await openai.createCompletion({
    model: config.openaiModel,
    prompt,
    max_tokens: 2000,
  });

  return response.data.choices[0].text.trim();
}

module.exports = generateCode;