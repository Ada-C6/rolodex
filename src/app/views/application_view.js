import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
// import ContactView from 'app/views/contact_view';

// var ContactDetailsView = Backbone.View.extend({
//   events: {
//     'click': false
//   },
//
//   render: function(){
//     return this;
//   }
// });

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

    this.listenTo(this.roloView, 'edit', this.editInput);
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
    // this.deets = new ContactDetailsView();

    return this;
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
    // 'click #contact-details': false,
    // 'click .contact-card': false,
    'click': 'hideModal'
  },

  hideModal: function(e) {
    if (e.target.id == 'contact-details' || $(e.target).closest('#contact-details').length
  /*|| e.target.class == 'contact-card'*/) {
      // console.log(e.target.id);
      return;
    // } else if ($(e.target).closest('#contact-details').length || $(e.target).closest('.contact-card').length) {
    //   return;
    } else {
    console.log('hiding stuff');
    $('#contact-details').hide();
    }
  },

  createContact: function(event) {
    // event.preventDefault();
    // var form = this.$('.contact-form');
    // console.log(form);
    // console.log(form.input.name.val());
    // email: form.input.email.val(),
    // phone: form.input.phone.val()
    // console.log(this.$('.contact-form'));
    // console.log('createContact ' + JSON.stringify(event));
    var rawContact = this.getInput();
    console.log('raw contact update ' + rawContact.update);
    if (rawContact.update == 'true') {
      console.log('inside rawContact.update == true');
      this.updateModel.set({'name': rawContact.name});
      this.updateModel.set({'email': rawContact.email});
      this.updateModel.set({'phone': rawContact.phone});
    } else {
      console.log('inside else');
      this.rolodex.add(rawContact);
    }

    console.log('updated model name ' + this.updateModel.attributes.name);
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

  editInput: function(e) {
    // console.log(e);
    this.$("input[name='name']").val(e.attributes.name);
    this.$("input[name='email']").val(e.attributes.email);
    this.$("input[name='phone']").val(e.attributes.phone);
    this.$("input[name='update']").val('true');
    console.log('editInput ' + JSON.stringify(e));
    console.log('edit Input update ' + this.$("input[name='update']").val());
    this.updateModel = e;
    // this.render();
  },

  clearInput: function(event) {
    this.$("input[name='name']").val('');
    this.$("input[name='email']").val('');
    this.$("input[name='phone']").val('');
    this.$("input[name='update']").val('false');
    console.log('after clear input: ' + this.$("input[name='update']").val());
  },

  getInput: function(form) {
    // console.log(this);
    // console.log(this.$("input[name='name']").val());
    var contact = {
      name: this.$("input[name='name']").val(),
      email: this.$("input[name='email']").val(),
      phone: this.$("input[name='phone']").val(),
      update: this.$("input[name='update']").val()
    };
    console.log('get input ' +  contact.update);
    return contact;
  }

});

export default ApplicationView;
