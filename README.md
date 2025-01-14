
# MERGE

[https://x.com/MergeAi_sol](https://x.com/MergeAi_sol)

## Introduction

The **MERGE** tool is a cutting-edge Node.js CLI application designed to integrate and merge multiple AI agents seamlessly. With MERGE, you can:

- Consolidate functionalities across diverse AI systems.
- Define specific interactions between AI agents.
- Automatically generate cohesive integration code using OpenAI’s capabilities.

Whether you're developing AI-driven workflows, hybrid applications, or multi-agent systems, MERGE is your go-to assistant for intelligent agent integration.

---

## Features

- **Interactive CLI**: Intuitive prompts to guide you through agent merging.
- **Dynamic Agent Analysis**: Parses `agents.json` to understand agent capabilities and endpoints.
- **Integration Code Generation**: Leverages OpenAI to produce code tailored to your integration needs.
- **Error Handling and Reporting**: Identifies potential issues with agent interactions and informs you of limitations.
- **Organized Output**: Creates structured project files in an output folder.

---

## File Structure

Here’s an overview of the application’s structure:

```
/project
  ├── /src
  │    ├── index.js           # Main entry point
  │    ├── fetchAgents.js     # Fetches agent configuration files
  │    ├── prompts.js         # Handles user prompts
  │    ├── integrationGenerator.js # OpenAI integration for merging agents
  │    ├── fileWriter.js      # File management
  ├── /config
  │    ├── config.js          # Centralized configuration
  ├── /output                 # Generated integration projects
  ├── package.json            # NPM dependencies
  ├── README.md               # Project documentation
```

---

## Getting Started

### 1. Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/) (v16.x or higher).
- **NPM**: Comes bundled with Node.js.
- **OpenAI API Key**: Get your API key from [OpenAI](https://platform.openai.com/).

---

### 2. Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/merge-ai/MERGE.git
   cd MERGE
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure your OpenAI API key**:
   - Open `config/config.js`.
   - Replace `your_openai_api_key` with your actual OpenAI API key:
     ```javascript
     module.exports = {
       openaiApiKey: 'your_openai_api_key',
       outputDirectory: '../output',
       openaiModel: 'text-davinci-003',
     };
     ```

4. *(Optional)* Use environment variables with `.env`:

   - Install `dotenv`:
     ```bash
     npm install dotenv
     ```
   - Create a `.env` file in the root directory:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key
     ```
   - Update `config/config.js` to use the environment variable:
     ```javascript
     require('dotenv').config();
     module.exports = {
       openaiApiKey: process.env.OPENAI_API_KEY,
       outputDirectory: '../output',
       openaiModel: 'text-davinci-003',
     };
     ```

---

### 3. Usage

Follow these steps to use the application:

1. **Run the application**:
   ```bash
   node ./src/index.js
   ```

2. **Answer the prompts**:

   - **Step 1**: Provide the `agents.json` URL. This URL should point to the configuration file containing agent details.
     - Example: `https://example.com/agents.json`.
   - **Step 2**: Describe the desired integration between agents.
     - Example: *“Merge a chatbot with a recommendation system”*.
   - **Step 3**: Choose your programming language.
     - Options: `JavaScript`, `Python`, `Go`, `Java`.
   - **Step 4**: Enter a name for your project.
     - Example: `ChatbotRecommender`.

3. **Wait for the application to process**:

   - The program fetches the `agents.json` file.
   - It uses OpenAI to generate the integration code based on your description.
   - All files are written to the `/output` folder.

4. **Access your generated project**:

   - Navigate to the `/output` directory:
     ```bash
     cd output/<YourProjectName>
     ```

---

## Troubleshooting

- **Node.js Version Error**: Ensure you’re using Node.js `v16.x` or higher.
- **`agents.json` Fetch Error**: Verify the URL is correct and accessible.
- **Missing OpenAI API Key**: Check that your API key is correctly set in `config/config.js` or `.env`.

---

## How It Works

1. **Fetch Agent Configurations**:
   - The application downloads the `agents.json` file to understand agent capabilities.

2. **Understand User Requirements**:
   - You describe the integration (e.g., "Combine a chatbot and an image analyzer").

3. **Generate Integration Code**:
   - The program sends the configuration and your description to OpenAI.
   - OpenAI generates the integration code in the specified programming language.

4. **Save Output**:
   - All generated files are saved in the `/output` folder.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! If you'd like to add features or improve the code, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add YourFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.

---

## Feedback

Have suggestions or feedback? Open an issue!

---

## Support

If you find this project helpful, please give it a ⭐ on [GitHub](https://github.com/merge-ai/MERGE)!
