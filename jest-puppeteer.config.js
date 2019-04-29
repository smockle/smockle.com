const servers = {
  development: {
    server: {
      command: "npm start && npm run serve",
      port: 8000,
      launchTimeout: 20000
    }
  }
};
module.exports = servers[process.env.NODE_ENV] || {};
