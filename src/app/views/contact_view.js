//  This view handles logic for a single contact
import Backbone from 'backbone';
import $ from 'jquery';
import Contact from 'app/models/contact';
import _ from 'underscore';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.template = options.template;

  this.modalTemplate = _.template($('#tmpl-contact-details').html());

  this.contactInfo = {
    name: this.model.get('name'),
    phone: this.model.get('phone'),
    email: this.model.get('email')
  };

  _.extend(this.contactInfo, Backbone.Events);

  this.listenTo(this, 'showContactDetails', this.viewDetails);

  // this.toggleDetails();
  },

  render: function() {
    var html = this.template({contact:  this.model.attributes});
    this.$el.html(html);
    // this.delegateEvents();
        console.log("contact is " + this.model.attributes.name);
        console.log("contact is " + this.model.attributes);

    // Enable chained calls
    return this;
  },

  // toggleDetails: function(onIndicator) {
  //   $("#contact-details").toggle(onIndicator);
  // },

  viewDetails: function() {
    //make it pop up here
    console.log("View the details in here");

    var html = this.modalTemplate({
      name: this.contactInfo.name,
      phone: this.contactInfo.phone,
      email: this.contactInfo.email
    });

    $("#contact-details").html(html);
    // this.toggleDetails();
  },

  events: {
   'click .contact-card': 'showDetails',
  //  'click #application': 'toggleDetails',
   'click .btn-cancel': 'clearInput'
 },

 showDetails: function() {
   console.log("You've clicked the contact card");
  event.stopPropagation();
   this.trigger("showContactDetails");
  this.trigger('showDetails', this.model);

 },

});


export default ContactView;
