import Backbone from 'backbone';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import $ from 'jquery';

const RolodexView = Backbone.View.extend({
  initialize: function(){
    this.template = _.template($('#tmpl-contact-card').html());
    this.element = this.$('#contact-cards');

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    };

    this.contactList = [];

    this.model.forEach(function(contact){
      var card = new ContactView({model: contact, template: this.template});
      console.log("new contactview");

      this.contactList.push(card);
    }, this);

    this.listenTo(this.model, "add", this.addContact);
    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    this.element.empty();

    this.contactList.forEach(function(card){
      card.render();
      console.log("render contact");
      this.element.append(card.$el);
    }, this);

    return this;
  },
  events: {
    'click .btn-cancel': 'clearForm',
    'click .btn-save': 'createContact',
  },
  clearForm: function(){
    this.input.name.val("");
    this.input.phone.val("");
    this.input.email.val("");
  },
  createContact: function(e){
    e.preventDefault();

    // console.log(this.input.name.val());

    var newContact = new Contact({name: this.input.name.val(), phone: this.input.phone.val(), email: this.input.email.val()});

    this.model.add(newContact);

    this.clearForm();
  },
  addContact: function(contact){
    var newContactView = new ContactView({model: contact, template: this.template});
    this.contactList.push(newContactView);
  }
});

export default RolodexView;
