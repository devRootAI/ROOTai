# ROOTai

[https://x.com/Root__AI](https://x.com/Root__AI)

## Introduction

The **ROOTai** is a powerful Node.js CLI application designed to streamline application development. With this tool, you can:

- Leverage API documentation (`openai.json`) to understand the system you’re building against.
- Specify the exact functionality you want.
- Automatically generate complete application code using OpenAI’s capabilities.
  
Whether you're building chatbots, integrations, or full-fledged applications, this tool is your AI-powered developer assistant.

---

## Features

- **Interactive CLI**: Simple, user-friendly prompts to guide you through the process.
- **Dynamic API Understanding**: Parses `openai.json` to understand API endpoints and capabilities.
- **Custom Code Generation**: Uses OpenAI to generate an application tailored to your needs in the programming language of your choice.
- **Handles API Limitations**: Clearly identifies and informs you of any API constraints.
- **Project Output**: Automatically creates project files and organizes them in an output folder.

---

## File Structure

Here’s an overview of the application’s structure:

```
/project
  ├── /src
  │    ├── index.js           # Main entry point
  │    ├── fetchJSON.js       # Fetches API documentation
  │    ├── prompts.js         # Handles user prompts
  │    ├── openaiGenerator.js # OpenAI integration
  │    ├── fileWriter.js      # File management
  ├── /config
  │    ├── config.js          # Centralized configuration
  ├── /output                 # Generated applications
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
   git clone https://github.com/rootai-builder/ROOTai.git
   cd ROOTai
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

   - **Step 1**: Provide the `openai.json` URL. This URL should point to the API documentation in JSON format.
     - Example: `https://example.com/openai.json`.
   - **Step 2**: Describe what you want to build.
     - Example: *“A chatbot that helps users schedule meetings”*.
   - **Step 3**: Choose your programming language.
     - Options: `JavaScript`, `Python`, `Go`, `Java`.
   - **Step 4**: Enter a name for your application.
     - Example: `MeetingSchedulerBot`.

3. **Wait for the application to process**:

   - The program fetches the `openai.json` file.
   - It uses OpenAI to generate the application based on your description and the API documentation.
   - All files are written to the `/output` folder.

4. **Access your generated application**:

   - Navigate to the `/output` directory:
     ```bash
     cd output/<YourAppName>
     ```

---

## Troubleshooting

- **Node.js Version Error**: Ensure you’re using Node.js `v16.x` or higher.
- **`openai.json` Fetch Error**: Verify the URL is correct and accessible.
- **Missing OpenAI API Key**: Check that your API key is correctly set in `config/config.js` or `.env`.

---

## How It Works

1. **Fetch API Documentation**:
   - The application downloads the `openai.json` file to understand the API’s endpoints, parameters, and capabilities.

2. **Understand User Requirements**:
   - You provide a description of what you want to build (e.g., "A chatbot for booking flights").

3. **Generate Code**:
   - The program sends the API documentation and your description to OpenAI.
   - OpenAI generates the code in the specified programming language.

4. **Handle Limitations**:
   - If OpenAI identifies API limitations, it explains them in the generated code or the output.

5. **Save Output**:
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

If you find this project helpful, please give it a ⭐ on [GitHub](https://github.com/devRootAI/ROOTai)!
