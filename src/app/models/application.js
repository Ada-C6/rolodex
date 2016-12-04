import Backbone from 'backbone';

const Application = Backbone.Model.extend({

  defaults: {
    name: "No Name",
    email: "me@me.com",
    phone: "206888888"
  },

  initialize: function() {
    console.log("Created new contact with title " + this.name);
  },
    add:function (contact){
    this.attributes.myRolodex.add(contact);
  }
});

export default Application;
