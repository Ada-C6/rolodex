import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.unorderedList = this.$('#contact-cards');
    this.contactList = [];

    this.model.forEach(function(contact) {
      this.addContactCard(contact);
    }, this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.listenTo(this.model, 'add', this.addContactCard);
    this.listenTo(this.model, 'update', this.render );

  },

  render: function() {
    this.unorderedList.empty();
    this.contactList.forEach(function(contactCard){
      contactCard.render();
      this.unorderedList.append(contactCard.$el);
    }, this);
    return this;
  },

  addContactCard: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.contactList.push(card);
    this.listenTo(card, 'showDetails', this.showContactDetails);
    this.listenTo(card, 'hideDetails', this.hideContactDetails);
  },

  showContactDetails: function(card) {
    var name = card.model.get('name');
    var email = card.model.get("email");
    var phone = card.model.get('phone');
    this.$('#contact-details').html(this.detailsTemplate({email: email, name: name, phone: phone}));
    this.$('#contact-details').toggle();
  },

  hideContactDetails: function() {
    this.$('#contact-details').toggle();
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearForm',
    'keyup': 'processKey',
  },

  processKey: function(e) {
    if(e.which === 13) { // enter key
      this.createContact(e);
    }
},

  getInput: function(){
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  createContact: function(event) {
    var newContact = this.getInput();
    this.model.add(newContact);
    this.clearForm();
  },

  clearForm: function(event) {
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }


});

export default RolodexView;
