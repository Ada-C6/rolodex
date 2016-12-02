import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($("#tmpl-contact-card").html()); // individual card template

    this.ulEl = this.$("#contact-cards"); // where all the cards will appear
    this.contactViewList = []; // where the name only contact views are stored

    this.model.forEach(function(rawContact) { // iterates through rolodex/collection of contacts
      this.addContact(rawContact); // adds the contact view to the array of views
    }, this);

    this.deets = this.$('#contact-details'); // where the details will appear

    this.listenTo(this.model, 'add', this.addContact); // when we add a contact to rolodex, add a contact view
    this.listenTo(this.model, 'update', this.render); // after we update rolodex, refresh the main section
    this.listenTo(this.model, 'change', this.render); // after we change any contacts, refresh the main section
  },

  render: function() {
    this.ulEl.empty(); // clear out current cards so this will render most updated list of contact views

    this.contactViewList.forEach(function(view) {
      view.render(); // render each contact view
      this.ulEl.append(view.$el); // add each contact view to the appropriate section of html
      this.listenTo(view, 'details', this.showDeets); // if card is clicked, display details
    }, this);

    return this;
  },

  showDeets: function(e) { // displays details
    var temp = _.template($('#tmpl-contact-details').html()); // uses details template
    var deetsHtml = temp(e.attributes); // stores template with appropriate variables updated
    this.contactModel = e; // stores clicked on contact model for use in editing
    this.deets.html(deetsHtml); // inserts stored html to appropriate section of html
    this.deets.show(); // changes css display value so section of html shows
  },

  addContact: function(contactModel) { // creates contact View from model and adds it to array of views
    var card = new ContactView({
      model: contactModel,
      template: this.template
    });
    this.contactViewList.push(card);
  },

  events: {
    'dblclick #contact-details': 'editHandler' // starts edit process when double click on details
  },

  editHandler: function(e){
    this.contactModel.attributes.update = true; // is this necessary?
    this.trigger('edit', this.contactModel); // trigger an event that application_view can listen to and send it the contact model that had its details displayed
  }
});

export default RolodexView;
