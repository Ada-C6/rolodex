import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults:{
    name: "Fake Name",
    email: "bull@dozer.com",
    phone: "123-456-7890"
  },
  initialize: function(options){
     console.log("Contact Created: " + this.get("name"));
  }

});

export default Contact;
