const servers = {
  development: {
    server: {
      command: "npm start",
      port: 3000
    }
  }
};
module.exports = servers[process.env.NODE_ENV] || {};
