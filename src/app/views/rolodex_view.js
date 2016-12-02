import Rolodex from 'app/collections/rolodex';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import Application from 'app/models/application';
import ApplicationView from 'app/views/rolodex_view';
import ContactView from 'app/views/application_view';


//I will make the rolodex view responsible for compiling and rendering the whole list of contacts

var RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.Template = _.template($('#tmpl-contact-card').html());
    console.log(JSON.stringify(this.model[0].name));
    this.listElement = this.$('.contact-cards');
    this.contactTemplate = _.template($('#tmpl-contact-details').html());

    this.contactList = [];

    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[email="email"]'),
      phone: this.$('.contact-form input[phone="phone"]')
    };

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'remove', this.removeContact);},


    render: function(){
      console.log("element " + this.model[0].name);
      var card = {name: (this.model.name)};
      var html = this.Template(card);
      this.$el.html(html);
      // this.delegateEvetns();
        this.listElement.empty();
        this.model.forEach(function(contacts) {
          contacts.render();
          this.listElement.append(contacts.$el);
        }, this);
        return this; // enable chained calls
      },
      addContact: function(contact) {
        var contactDetails = new ContactView({
          model: contact,
          template: this.contactTemplate
        });
        this.contactList.push(contact);
      },
      getInput: function() {
        var contact = {
          name: this.input.name.val(),
          email: this.input.email.val(),
          phone: this.input.phone.val(),
        };
        return contact;
      },
      clearInput: function(event) {
        console.log("clearInput called!");
        this.input.name.val('');
        this.input.email.val('');
        this.input.phone.val('');
      }
  });

  export default RolodexView;
