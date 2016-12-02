import $ from 'jquery';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Jo',
    phone: '555-5555',
    email: 'j@me.com'
  },
  {
    name: 'Pat',
    phone: '555-5555',
    email: 'p@me.com'
  },
  {
    name: 'Sam',
    phone: '555-5555',
    email: 's@me.com'
  }
];

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {

    this.rolodex = new Rolodex(contactData);
    this.roloView = new RolodexView({
      el: 'main',
      model: this.rolodex
    });

    this.listenTo(this.roloView, 'edit', this.editInput);
  },

  render: function() {
    this.roloView.render();

    return this;
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
    'click': 'hideModal'
  },

  hideModal: function(e) {
    if (e.target.id == 'contact-details' || $(e.target).closest('#contact-details').length) {
      return;
    } else {
    $('#contact-details').hide();
    }
  },

  createContact: function(event) {
    var rawContact = this.getInput();

    if (rawContact.update == 'true') {
      this.updateModel.set({name: rawContact.name, email: rawContact.email, phone: rawContact.phone});
    } else {
      this.rolodex.add(rawContact);
    }

    this.clearInput();
  },

  editInput: function(e) {
    this.$("input[name='name']").val(e.attributes.name);
    this.$("input[name='email']").val(e.attributes.email);
    this.$("input[name='phone']").val(e.attributes.phone);
    this.$("input[name='update']").val('true');

    this.updateModel = e;
  },

  clearInput: function(event) {
    this.$("input[name='name']").val('');
    this.$("input[name='email']").val('');
    this.$("input[name='phone']").val('');
    this.$("input[name='update']").val('false');
  },

  getInput: function() {
    var contact = {
      name: this.$("input[name='name']").val(),
      email: this.$("input[name='email']").val(),
      phone: this.$("input[name='phone']").val(),
      update: this.$("input[name='update']").val()
    };
    return contact;
  }

});

export default ApplicationView;
