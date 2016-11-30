import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

defaults: {
    name: 'Name Here',
    email: 'Email Here',
    phone: 'Number Here'
  },

  initialize: function(options) {
    console.log("new contact" + this.get("name"));
  },

});

// $(document).ready(function() {
//   var contact = new Contact();
//   var contactView = new ContactView({
//     el: $('#contact-details'),
//     model: contact
//   });
//     contactView.render();
// });

export default Contact;
