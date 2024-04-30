const slackReporter = require('cypress-slack-reporter');

module.exports = (on, config) => {
  on('task', {
    slack(message) {
      return slackReporter.send(message);
    }
  });
};
