import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#contact-card').html());

    this.listElement = this.$('.contact-card');

    this.cardList = [];

    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);

    //code to keep track of form inputs goes here?

    this.listenTo(this.model, 'add', this.addContact);
  },

  render: function() {
    this.listElement.empty();

    this.cardList.forEach(function(contactCard){
      contactCard.render();

      this.listElement.append(contactCard.$el);
    }, this);

    return this;

  },

  addContact: function(contact) {
    var contactCard = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.cardList.push(contactCard);
    console.log(contactCard);
  }

});

export default RolodexView;
