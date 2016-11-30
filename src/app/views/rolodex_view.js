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

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
    // this.cView = new ContactView({
    //   template: this.template
    // });
    // this.render();
  },

  render: function() {
    this.ulEl.empty();

    this.contactViewList.forEach(function(view) {
      view.render();
      // console.log(view.$el.html());
      this.ulEl.append(view.$el);
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
  }
});

export default RolodexView;
