import Backbone from 'backbone';

const Application = Backbone.Model.extend({

  defaults: {
    name: "No Name",
    email: "me@me.com",
    phone: "206888888"
  },

  initialize: function() {
    console.log("Created new contact with title " + this.name);
  }
  // toggleComplete: function() {
  //   var newStatus = !(this.get('complete'));
  //   this.set('complete', newStatus);
  // }
});

export default Application;
