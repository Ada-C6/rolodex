import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import DetailedView from 'app/views/detailed_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options){
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.detailedTemplate = _.template($('#tmpl-contact-details').html());
    this.listOfContacts = [];
    this.listHolderElement = $('#contact-cards');
    for (var i = 0; i < this.model.length; i++){
      this.addContact(this.model.models[i]);
    }
    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);
  },
  render: function(){
    this.listHolderElement.empty();
    for (var i = 0; i < this.listOfContacts.length; i++){
      this.listHolderElement.append(this.listOfContacts[i].render().$el);
    }
    return this;
  },
  addContact: function(contact){
    var currentContact = new ContactView({model: contact, template: this.contactTemplate, detailed: this.detailedTemplate});
    this.listOfContacts.push(currentContact);
    this.listenTo(currentContact, 'contact-view-clicked', this.displayContactDetails);
  },
  createNewContact: function(contact){
    this.model.add(contact);
  },
  displayContactDetails: function(contactModel){
    // console.log("In Rolodex displayContactDetails");
    // console.log(contactModel);
    this.myContactView = new DetailedView({model: contactModel, template: this.detailedTemplate, el: $('#contact-details')});
    this.myContactView.render();
    this.myContactView.show();
    this.listenTo(this.myContactView, 'edit-contact', this.editContact);
  },
  hideContactDetails: function(){
    if (this.myContactView != null){
      this.myContactView.hide();
    }
  },
  editContact: function(contactModel){
    this.trigger('edit-contact', contactModel);
  }
});

export default RolodexView;
