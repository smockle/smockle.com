const servers = {
  development: {
    server: {
      command: "npm run build && npm run serve",
      port: 9000,
      launchTimeout: 120000
    }
  }
};
module.exports = servers[process.env.NODE_ENV] || {};
