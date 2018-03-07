const amphtmlValidator = require("amphtml-validator");
const fs = require("fs");
const path = require("path");

amphtmlValidator
  .getInstance()
  .then(validator => {
    const input = fs.readFileSync(
      path.join(__dirname, "../public/index.amp.html"),
      "utf8"
    );
    const result = validator.validateString(input);
    (result.status === "PASS" ? console.log : console.error)(result.status);
    for (var ii = 0; ii < result.errors.length; ii++) {
      var error = result.errors[ii];
      var msg = `line ${error.line}, col ${error.col}: ${
        error.message
      }${error.specUrl !== null && ` (see ${error.specUrl})`}`;
      (error.severity === "ERROR" ? console.error : console.warn)(msg);
    }
    process.exit(result.status !== "PASS" ? 1 : 0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
