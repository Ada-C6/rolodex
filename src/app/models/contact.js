import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "default name",
    email: "default email",
    phone: "default phone",
    showing: false
  }, //close defaults

  initialize: function() {
    console.log("created a new contact with name: " + this.get("name"));
  }, //close initialize

  toggleShowing: function() {
    $('#contact-details').show();
    $('#tmpl-contact-details').show();
    $('#contact-details').html();
  } //close toggleShowing

});

export default Contact;
