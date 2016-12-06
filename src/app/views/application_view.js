// application_view.js
import Backbone from 'backbone';

const ApplicationView = Backbone.View.extend({
  // added options to function params. ala erin. Erros?
  initialize: function(options) {

    // this.render(); removed this doesn't seem to have broken it.
  },

  render: function() {
    return this;
  },
  // add contact?
  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    // contactBox not list?
    this.contactBox.push(contact);
  }


});

export default ApplicationView;
