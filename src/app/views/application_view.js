import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.contactData = options.contactData;
    this.contactTemplate = _.template($('#tmpl-contact-details').html());
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());

  },

  render: function() {
    var contactView = new ContactView({
      el: $('#contact-details'),
      model: contact,
      template: this.contactTemplate
    });

    contactView.render();
    // var application = new Application(contactData);
    var applicationView = new RolodexView({
      el: $('#contact-cards'),
      contactData: contactData,
      template: this.rolodexTemplate
    });

    rolodexView.render();

    return this;
  }
});

export default ApplicationView;
