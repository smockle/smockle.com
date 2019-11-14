// @ts-check
const os = require("os");
const executablePaths = {
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  linux: "/usr/bin/google-chrome"
};
module.exports = {
  server: {
    command: "yarn run serve",
    port: 9000,
    launchTimeout: 120000
  },
  launch: {
    executablePath: executablePaths[os.platform()]
  }
};
