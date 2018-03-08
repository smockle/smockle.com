module.exports = {
  server: {
    command:
      "bash -c 'if [[ $(lsof -t -i :3000) ]]; then kill -9 $(lsof -t -i :3000); fi' && node scripts/start.js",
    port: 3000
  }
};
