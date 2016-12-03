import Application from 'app/models/application';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import $ from 'jquery';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.rolodex = new Rolodex(this.model.get('rolodex'));
    this.rolodexView = new RolodexView({model: this.rolodex, el: $('main')});
    // console.log(this.model);
    this.formInput = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    },
    this.listenTo(this.rolodexView, 'edit-contact', this.editContact);
    this.editMode = false;
  },
  render: function() {
    this.rolodexView.render();
    return this;
  },
  events: {
    'click .btn-save': 'saveContact',
    'click .btn-cancel': 'clearContactForm',
    'click': 'closeModal'
  },
  saveContact: function(){
    if (!this.editMode){
      var contact = new Contact({name: this.formInput.name.val(), email: this.formInput.email.val(), phone: this.formInput.phone.val()});
      this.rolodexView.createNewContact(contact);
    } else {
      this.editableModel.set({name: this.formInput.name.val(), email: this.formInput.email.val(), phone: this.formInput.phone.val()});
    }
    this.clearContactForm();
    this.$('#form-title').html("Add A New Contact");
    this.editMode = false;
    this.render();
    // console.log(this.rolodex);
  },
  clearContactForm: function(){
    this.formInput.name.val('');
    this.formInput.email.val('');
    this.formInput.phone.val('');
    this.$('#form-title').html("Add A New Contact");
    this.editMode = false;
  },
  closeModal: function(event){
    // console.log("TRIGGERED");
    // console.log(event);
    this.rolodexView.hideContactDetails();
  },
  editContact: function(contactModel){
    // console.log("Arrived at ApplicationView editContact");
    this.formInput.name.val(contactModel.get("name"));
    this.formInput.email.val(contactModel.get("email"));
    this.formInput.phone.val(contactModel.get("phone"));
    this.editableModel = contactModel;
    this.editMode = true;
    this.$('#form-title').html("Edit Your Contact");
  }
});

export default ApplicationView;
