import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Daria Morgendorffer',
    email: 'no@nah.com',
    phone: '5551112222',
  },
  {
    name: 'Quinn Morgendorffer',
    email: 'imcute@popular.com',
    phone: '5551234567',
  },
  {
    name: 'Jane Lane',
    email: 'amiga@prettyrad.com',
    phone: '5552223333',
  },
  {
    name: 'Trent Lane',
    email: 'newnameideas@mystikspiral.com',
    phone: '5556667878',
  },
  {
    name: 'Brittany Taylor',
    email: 'thebest@cheerleader.com',
    phone: '5559873456',
  },
];

const ApplicationView = Backbone.View.extend({
  // this.$el is '#application'
  initialize: function() {
    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]'),
    };

    // Instantiate Rolodex & RolodexView
    this.rolodex = new Rolodex(contactData);
    this.rolodexView = new RolodexView({
      el: $('main'),
      model: this.rolodex
    });

    // // Keep track of modal element/template & listen for clicks
    // // NOTE: trying moving this to RolodexView
    // this.modalSection = this.$('#contact-details');
    // this.modalTemplate = _.template($('#tmpl-contact-details').html());
    // // this.listenTo() -- NOTE: should this be in RolodexView?

    // Listen for clicks on modal area & non-modal area. Show/hide depending.
    // this.listenTo(this.modalSection, 'click', );
    // this.listenTo(this.$el, 'main:click', this.hideModal);

    this.render();
  },

  render: function() {
    // this.modalSection.hide(); NOTE: moved to RolodexView
    this.rolodexView.render();
    // this.delegateEvents();
    return this;
  },

  events: {
    'click': 'hideModal',
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  createContact: function(event) {
    console.log("Yo that save button got clicked");

    event.preventDefault();

    var contact = this.getInput();

    this.rolodex.add(contact);

    this.clearInput();
  },

  getInput: function() {
    console.log("Getting Input");
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  clearInput: function() {
    console.log("Clearing Input");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },
  //
  // mainClick: function(event) {
  //   console.log("main click!!!");
  //   this.trigger('main:click');
  // },

  hideModal: function(event) {
    console.log("Modal should go away now...");
    this.$('#contact-details').hide();
  }

});

export default ApplicationView;
