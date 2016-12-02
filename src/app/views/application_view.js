import Backbone from 'backbone';
import $ from 'jquery';
import ContactListView from 'app/views/contact_list_view';


const ApplicationView = Backbone.View.extend({ // parent
  initialize: function(options) {
    // this.listElem = options.el;
    this.rawList = options.contacts;
    // console.log('THIS>>' + this.model);

    var listElement = $('#contact-cards');
    var formElement = $('.contact-form');

   // console.log('CHECKPOINT');
     this.contactGrid = new ContactListView( { //child
       el: listElement,
       contacts: this.rawList
     });
     this.contactGrid.render();
     console.log(this.contactGrid.modelList + "modelList");
    //  console.log('This grid was created in application_view: ' + contactGrid);

  },

  render: function() {
    // // EVERYTHING IS ALREADY RENDERED
    // var saveButton = new ButtonView();
    // var cancelButton = new ButtonView();
    //
    // // Render buttons
    // saveButton.render();
    // cancelButton.render();
    //
    // // Put the buttons on the page // nope they are already there
    // // remember we want them inside the contact-form 'box'
    // this.$('btn-save').append(saveButton.$el);
    // this.$('btn-cancel').append(cancelButton.$el);
    //
    // return this;
  },
  events: {
    'click .btn-save': 'saveOnClick',
    'click .btn-cancel': 'clearOnClick'
  },
  saveOnClick: function() {
    console.log('Ready to save?');
    var rawData = this.getInput();
    // console.log('what is THISMODEL? ' + JSON.stringify(this.model));
    // this.model.add(rawData);
    // this.trigger('saving');
    this.savingContact(rawData);
  },
  clearOnClick: function() {
    console.log('Clear form input!');
    this.$('input')[0].value = '';
    this.$('input')[1].value = '';
    this.$('input')[2].value = '';
  },
  getInput: function() {
    var contact = {
      name: this.$('input')[0].value,
      email: this.$('input')[1].value,
      phone: this.$('input')[2].value
    };
    console.log(contact);
    return contact;
  },
  savingContact: function(rawData) {
    this.contactGrid.createContact(rawData);
    console.log('Contact created');
    this.clearOnClick();
  }
});

export default ApplicationView;
