// check-css-imports.js
const fs = require("fs");
const path = require("path");

const targetFile = "main.css";

// Directories to scan for source files
const sourceDirs = ["./src", "./pages", "./components", "./app"];

// File extensions to check
const exts = [".js", ".jsx", ".ts", ".tsx"];

// Collect imports
let imports = [];

// Recursively walk through project files
function walk(dir) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      walk(itemPath);
    } else if (exts.includes(path.extname(item))) {
      const content = fs.readFileSync(itemPath, "utf-8");
      const regex = /import\s+['"]([^'"]+\.css)['"]/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        imports.push({ file: itemPath, importPath: match[1] });
      }
    }
  }
}

// Verify import paths
function checkImport(importObj) {
  let { file, importPath } = importObj;
  let baseDir = path.dirname(file);

  // Handle relative imports like ./styles/main.css
  let resolvedPath = path.resolve(baseDir, importPath);

  // If importPath doesn’t start with . or /, assume it's from root
  if (!importPath.startsWith(".") && !importPath.startsWith("/")) {
    resolvedPath = path.resolve(process.cwd(), importPath);
  }

  // Normalize for extensions
  if (!fs.existsSync(resolvedPath)) {
    console.error(`❌ Missing file: ${importPath} (imported in ${file})`);
  } else {
    // Check case sensitivity
    const actualName = path.basename(resolvedPath);
    if (actualName !== path.basename(importPath)) {
      console.warn(
        `⚠️ Case mismatch: Imported "${importPath}", found "${actualName}" (in ${file})`
      );
    } else {
      console.log(`✅ OK: ${importPath} (in ${file})`);
    }
  }
}

// Run the script
for (const dir of sourceDirs) {
  walk(dir);
}

if (imports.length === 0) {
  console.log("ℹ️ No CSS imports found in source files.");
} else {
  console.log(`🔍 Found ${imports.length} CSS imports, validating...\n`);
  imports.forEach(checkImport);
}
