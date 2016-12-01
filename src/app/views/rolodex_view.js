import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($("#tmpl-contact-card").html());

    this.ulEl = this.$("#contact-cards");
    this.contactViewList = [];
    // this.model..
    // console.log('initialize options ' + options.model);
    this.model.forEach(function(rawContact) {
      // console.log('going through rolodex ' + rawContact.attributes.name);
      this.addContact(rawContact);
    }, this);

    this.deets = this.$('#contact-details');

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
    // this.cView = new ContactView({
    //   template: this.template
    // });
    // this.render();
  },

  showDeets: function(e) {
    var temp = _.template($('#tmpl-contact-details').html());
    var deetsHtml = temp(e);
    this.deets.html(deetsHtml);
    this.deets.show();
    console.log('details ' + e.name);
  },

  render: function() {
    this.ulEl.empty();
    this.deets.hide();

    this.contactViewList.forEach(function(view) {
      view.render();
      // console.log(view.$el.html());
      this.ulEl.append(view.$el);
      this.listenTo(view, 'details', this.showDeets);
    }, this);
    // this.cView.render();


    return this;
  },

  addContact: function(contactModel) {
    // console.log('before var card ' + contactModel.attributes.name);
    var card = new ContactView({
      model: contactModel,
      template: this.template
    });
    // console.log('add contact ' + card.model.attributes.name);
    this.contactViewList.push(card);
  },

  events: {
    // 'click': 'hideModal',
    // 'click #contact-details': 'suppress'
  },

  suppress: function(e){
    return false;
  },

  hideModal: function(e){
    console.log('this is hiding something');
    this.deets.hide();
  }
});

export default RolodexView;
