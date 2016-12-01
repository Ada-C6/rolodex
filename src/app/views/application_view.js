import Backbone from 'backbone';
import $ from 'jquery';
import ContactListView from 'app/views/contact_list_view';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // this.listElem = options.el;
    this.rawList = options.contacts;
    console.log('THIS>>' + this.model);

    var listElement = $('#contact-cards');
    var formElement = $('.contact-form');

   // console.log('CHECKPOINT');
    //  var contactBox = new ContactView( {
    //    el: listElement //,
    //   //  model: rawList
    //  });
     var contactGrid = new ContactListView( {
       el: listElement,
       contacts: this.rawList
     });
     console.log('This grid' + contactGrid);
     contactGrid.render();

  },

  render: function() {
    // var saveButton = new ButtonView();
    // var cancelButton = new ButtonView();
    //
    // // Render buttons
    // saveButton.render();
    // cancelButton.render();
    //
    // // Put the buttons on the page
    // // remember we want them inside the contact-form 'box'
    // this.$('btn-save').append(saveButton.$el);
    // this.$('btn-cancel').append(cancelButton.$el);
    //
    // return this;
  },
  events: {
    'click .btn-save': 'saveOnClick',
    'click .btn-cancel': 'cancelOnClick'
  },
  saveOnClick: function() {
    console.log('Ready to save?');
    // console.log('How to sent it to the ContactListView next?');
    var rawData = this.getInput();
    // console.log('what is THISMODEL? ' + JSON.stringify(this.model));
    this.model.add(rawData);
    this.trigger('saving');
  },
  cancelOnClick: function() {
    console.log('Cancel form input!');
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
    // var contact = {
    //  name: this.input.name.val(),
    //  email: this.input.email.val()
    //  phone: this.input.phone.val()
    // };
    // return contact;
  },
  // createContact HERE Use same syntaxt as cancel to pull values, not like tasklist
  //DONT FORGET TO USE THE MODEL to push the new contact this.model.add(rawData)
  // then clear the form and listen in ContactListView
});

export default ApplicationView;
