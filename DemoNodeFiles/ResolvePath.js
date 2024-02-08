const path = require("path");
function resolvePath(relativePath) {
  try {
    // Resolve the relative path to an absolute path
    const absolutePath = path.resolve(relativePath);

    // Print the resolved path to the console
    console.log("Resolved Path:", absolutePath);
  } catch (error) {
    console.error("Error resolving path:", error.message);
  }
}
resolvePath("relative / path / to / Demo.txt");
resolvePath("non-existentfolder/Demo.txt");
