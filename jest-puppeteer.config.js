const servers = {
  development: {
    server: {
      command: "npm run build && npm run serve",
      port: 9000,
      launchTimeout: 40000
    }
  }
};
module.exports = servers[process.env.NODE_ENV] || {};
