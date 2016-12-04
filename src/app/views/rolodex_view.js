import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';


//I will make the rolodex view responsible for compiling and rendering the whole list of contacts

var RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.cardTemplate = _.template($('#tmpl-contact-card').html());

    // this.contactTemplate = _.template($('#tmpl-contact-details').html());

    this.contactList = [];

    this.model.forEach(function(newContact) {
      this.addContact(newContact);
    }, this);


    //options.model?


    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'remove', this.removeContact);},



    render: function(){
      this.$el.empty();
      this.contactList.forEach(function(contactCard) {
        contactCard.render();
        this.delegateEvents();
      }, this);
      return this;
    },

    events: {
      //need to add these in
      'click .btn-delete': 'removeContact',
      'click .btn-edit': 'clearInput',
    },

    addContact: function(contact) {
      var contactCard = new ContactView({
        model: contact,
        el:this.$el,
        template: this.cardTemplate
      });
      this.contactList.push(contactCard);
    },

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
      // Add the contact to our Collection
      var newContact = this.getInput();
      this.model.add(newContact);
      this.clearInput();
    }

  });

  export default RolodexView;
