const fs = require("fs");
const path = require("path");

function checkImport(importPath) {
  const parts = importPath.split("/");
  let currentDir = process.cwd();

  for (const part of parts) {
    const files = fs.readdirSync(currentDir);
    const match = files.find((f) => f.toLowerCase() === part.toLowerCase());

    if (!match) {
      console.error(`❌ Path not found: ${currentDir}/${part}`);
      process.exit(1);
    }

    if (match !== part) {
      console.error(`⚠️ Case mismatch: Expected "${part}" but found "${match}"`);
      process.exit(1);
    }

    currentDir = path.join(currentDir, match);
  }

  console.log(`✅ Import path "${importPath}" is correct!`);
}

// Change this to the import you want to check
checkImport("src/components/ui/dashboard");
