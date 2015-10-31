var models = require('../models');

module.exports = {


  messages: {
    get: function (req, res) {
      //create a signal that are model can hear
      res.send('GET request to homepage');
      models['messages'].get();


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.send('POST request to homepage');
      models['messages'].post();
      //create a signal that model can hear
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('GET request to homepage');
      models['users'].get();
    },
    post: function (req, res) {
      res.send('POST request to homepage');
      models['users'].post();
    }
  },
};

