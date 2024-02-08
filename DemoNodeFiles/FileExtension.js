const path = require("path");
function checkFileExtension(filePath, expectedExtension) {
  const actualExtension = path.extname(filePath).toLowerCase();
  if (actualExtension === expectedExtension.toLowerCase()) {
    console.log(
      `File "${filePath}" has the expected extension "${expectedExtension}"`
    );
  } else {
    console.log(
      `File '${filePath}' does not have the expected extension '${expectedExtension}'`
    );
  }
}

const filePath = "/path/file.txt";
const expected = ".txt";
const expected2 = ".pdf";
checkFileExtension(filePath, expected);
checkFileExtension(filePath, expected2);
