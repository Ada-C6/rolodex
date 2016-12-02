import RolodexView from 'app/views/rolodex_view';
import ContactView from 'app/views/contact_view';
import $ from 'jquery';
import _ from 'underscore';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.rolodexDisplay = new RolodexView(
      {
        el: $("main"),
        model: this.model.rolodex
      });
  },

  render: function() {
    this.rolodexDisplay.render();
    return this;
  },

  events: {
    'click .btn-cancel': 'clearForm',
    'click .btn-save': 'createContact',
  },

  clearForm: function(event) {
    console.log("form cleared");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  getInput: function() {
    var contactInfo = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    };
    return contactInfo;
  },

  createContact: function(event) {
    event.preventDefault();
    var collectContact = this.getInput();

    this.model.rolodex.add(collectContact);
    this.clearForm();
    console.log('createContact clicked');
  },
});

export default ApplicationView;
