import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
// import ContactView from 'app/views/contact_view';

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
    // console.log(rolodex.models[0].attributes.name);
    this.roloView = new RolodexView({
      el: 'main',
      model: this.rolodex
    });

      // console.log(roloView.$el);
    // this.template = _.template($("#tmpl-contact-card").html());
    // //
    // this.ulEl = this.$("#contact-cards");

    // var roloView = new RolodexView({
    //   el: '#application',
    //   model: application
    // });
    // this.viewList = [];
    // // this.model..
    // this.cView = new ContactView({
    //   template: this.template
    // });
    // this.render();
  },

  render: function() {
    this.roloView.render();
    // this.ulEl.empty();
    //
    // this.cView.render();
    //
    // this.ulEl.append(this.cView.$el);

    return this;
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
    'click header': 'hideModal'
  },

  hideModal: function(e) {
    this.roloView.$('#contact-details').hide();
  },

  createContact: function(event) {
    // event.preventDefault();
    // var form = this.$('.contact-form');
    // console.log(form);
    // console.log(form.input.name.val());
    // email: form.input.email.val(),
    // phone: form.input.phone.val()
    // console.log(this.$('.contact-form'));
    var rawContact = this.getInput();
    // console.log('raw contact ' + rawContact.name);
    this.rolodex.add(rawContact);
    // console.log('contact model ' + contactModel.attributes);
    // var card = new ContactView({
    //   model: contactModel,
    //   template: this.roloView.template
    // });
    // this.roloView.contactViewList.push(card);
    this.clearInput();
    // console.log('after clearInput');
    // return this;
  },

  clearInput: function(event) {
    this.$("input[name='name']").val('');
    this.$("input[name='email']").val('');
    this.$("input[name='phone']").val('');
  },

  getInput: function(form) {
    // console.log(this);
    // console.log(this.$("input[name='name']").val());
    var contact = {
      name: this.$("input[name='name']").val(),
      email: this.$("input[name='email']").val(),
      phone: this.$("input[name='phone']").val()
    };
    return contact;
  }

});

export default ApplicationView;
