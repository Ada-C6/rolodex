import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options){
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());
    this.element = this.$('#contact-cards');
    this.boxThing = $('#contact-details');
    this.cardTemplate = _.template($('#tmpl-contact-card').html());


    this.nameList = [];

    this.model.forEach(function(names){
      this.addName(names);
      console.log("INITIALIZE ROLODEX: " + JSON.stringify(names));
    },this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };
    this.listenTo(this.model, 'add', this.addName);
    this.listenTo(this.model, 'update', this.render);

  },
  render: function(){
    this.element.empty();

    this.nameList.forEach(function(names){
      names.render();
      this.element.append(names.$el);
    }, this);
    return this;
  },
  events: {
    "click .btn-cancel" : 'clearInput',
    "click .btn-save": "createCard"
  },
  clearInput: function(event){
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },
  hide: function(){
    this.$el.hide();
  },
  createCard: function(event){
    event.preventDefault();

    var names = this.getInput();
    console.log("create a card" + JSON.stringify(names));
    var contact = this.model.add(names);

    // this.addName(contact);
    // this.render();

    this.clearInput();
  },
  addName: function(contact){
    var carta = new ContactView({
      model: contact,
      template: this.rolodexTemplate
    });
    console.log("Add the card " + carta);
    this.listenTo(carta, 'showOff', this.showBox);
    this.nameList.push(carta);
  },
  getInput: function(){
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    console.log("This is returning the contact" + JSON.stringify(contact));
    return contact;
  },
  showBox: function(contact){
    console.log("You are getting a box for: " + contact.get("name"));
    this.showDeets(contact);
    this.boxThing.show();
  },
  showDeets: function(){
    //Trying to figure 
    // console.log(JSON.stringify(contact));
    // var info = this.cardTemplate({name: contact, email: contact.attributes.email, phone: contact.attributes.phone});
    this.boxThing.append(info);
  }
});

export default RolodexView;
