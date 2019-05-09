// @ts-check
const os = require("os");
const servers = {
  development: {
    server: {
      command: "npm run serve",
      port: 9000,
      launchTimeout: 120000
    }
  }
};
const executablePaths = {
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  linux: "/usr/bin/google-chrome"
};
module.exports = {
  ...(servers[process.env.NODE_ENV] || {}),
  launch: {
    executablePath: executablePaths[os.platform()]
  }
};
