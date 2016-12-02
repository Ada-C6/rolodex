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

    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);

    this.deets = this.$('#contact-details');

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.ulEl.empty();

    this.contactViewList.forEach(function(view) {
      view.render();
      this.ulEl.append(view.$el);
      this.listenTo(view, 'details', this.showDeets);
    }, this);

    return this;
  },

  showDeets: function(e) {
    var temp = _.template($('#tmpl-contact-details').html());
    var deetsHtml = temp(e.attributes);
    this.contactModel = e;
    this.deets.html(deetsHtml);
    this.deets.show();
  },

  addContact: function(contactModel) {
    var card = new ContactView({
      model: contactModel,
      template: this.template
    });
    this.contactViewList.push(card);
  },

  events: {
    'dblclick #contact-details': 'editHandler'
  },

  editHandler: function(e){
    this.contactModel.attributes.update = true;
    this.trigger('edit', this.contactModel);
  }
});

export default RolodexView;
