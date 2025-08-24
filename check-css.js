// check-css.js
const fs = require("fs");
const path = require("path");

// Directories to search in
const searchDirs = ["./", "./src", "./public", "./styles"];

// The file we want to check
const targetFile = "main.css";

let foundPaths = [];

function searchDir(dir) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      searchDir(itemPath);
    } else if (item.toLowerCase() === targetFile.toLowerCase()) {
      foundPaths.push(itemPath);
    }
  }
}

// Search directories
for (const dir of searchDirs) {
  searchDir(dir);
}

if (foundPaths.length > 0) {
  console.log("✅ Found CSS file(s):");
  foundPaths.forEach((p) => console.log(" - " + p));

  // Check for correct casing
  foundPaths.forEach((p) => {
    if (!p.endsWith(targetFile)) {
      console.warn(`⚠️ Case mismatch: Found "${p}", expected "${targetFile}"`);
    }
  });
} else {
  console.error(`❌ No "${targetFile}" file found in common folders.`);
  process.exit(1);
}
