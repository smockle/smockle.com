const servers = {
  development: {
    server: {
      command: "npm start",
      port: 8000
    }
  }
};
module.exports = servers[process.env.NODE_ENV] || {};
