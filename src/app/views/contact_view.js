import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';


const ContactView = Backbone.View.extend({

  initialize: function(options) {
    this.contact = options.model;
    this.template = options.template;
    this.cardTemplate = _.template($('#tmpl-contact-details').html());
  },

  render: function() {
    var html = this.template( this.model.toJSON());


    this.$el.html(html);
    this.delegateEvents();

    // Enable chained calls
    return this;
  },

  events: {
   'click .contact-card': 'showModal',
  },

  showModal: function(event) {
    event.preventDefault();

    var html = this.cardTemplate({
      name: this.contact.attributes.name,
      email: this.contact.attributes.email,
      phone: this.contact.attributes.phone
    });

    $('#contact-details').show();
    $('#contact-details').html(html);

}

});


export default ContactView;
