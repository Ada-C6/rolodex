import Backbone from 'backbone';

const Application = Backbone.Model.extend({

  defaults: {
    name: "No Name",
    email: "me@me.com",
    phone: "206888888"
  },

  initialize: function() {
  },
});

export default Application;
