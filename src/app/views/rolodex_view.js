import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import ContactView from 'app/views/contact_view'

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactsData = options.contactsData; //stores the full list of contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html()); //compiles a template to be shared between the contacts
    this.listElement = this.$('#contact-cards'); //keep track of the <li> elements
    this.cardList = [];
    this.contactsData.forEach(function(contact) {
      var card = new ContactView({
        contact: contact,
        template: this.contactTemplate
      });
      this.cardList.push(card);
    }, this);
  }, //close initialize

  render: function() {
    this.listElement.empty(); //make sure the DOM is empty before we start adding to it
    this.cardList.forEach(function(card) {
      card.render(); //cause the contact to render
      this.listElement.append(card.$el); //add the html to the rolodex
    }, this);
    return this;
  } //close render
});

export default RolodexView;
