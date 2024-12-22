const fs = require('fs');
const path = require('path');

async function writeFiles(outputDir, appName, language, generatedCode) {
  try {
    fs.mkdirSync(outputDir, { recursive: true });

    const fileExtension = {
      JavaScript: 'js',
      Python: 'py',
      Go: 'go',
      Java: 'java',
    }[language];

    const filePath = path.join(outputDir, `app.${fileExtension}`);
    fs.writeFileSync(filePath, generatedCode);

    console.log(`Generated application files written to: ${filePath}`);
  } catch (error) {
    throw new Error(`Failed to write files: ${error.message}`);
  }
}

module.exports = writeFiles;