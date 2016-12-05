import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


var RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.cardTemplate = _.template($('#tmpl-contact-card').html());
    this.contactList = [];
    this.model.forEach(function(newContact) {
      this.addContact(newContact);
    }, this);


    this.listenTo(this.model, 'click', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'add', this.addContact);
    },

  render: function(){
    this.$el.empty();
    this.contactList.forEach(function(contactCard) {
      contactCard.render();
      this.delegateEvents();
    }, this);
    return this;
  },

  addContact: function(contact) {
    var contactCard = new ContactView({
      model: contact,
      el:this.$el,
      template: this.cardTemplate
    });
    this.listenTo(contactCard, 'show-details', this.showModal);
    this.contactList.push(contactCard);
  },

//did not get to this optional button functionality
  removeContact: function(contact){
    var desirables = [];
    this.contactList.forEach(function(contactCard){
      if (contactCard.model != contact) {
        undesirables.push(contact);
      }
    });
    this.contactList = desirables;
  },

  createContact: function(event) {
    event.preventDefault();
    var newContact = this.getInput();
    this.model.add(newContact);
    this.clearInput();
  }
});

export default RolodexView;
