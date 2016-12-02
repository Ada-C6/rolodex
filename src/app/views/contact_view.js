// this is the view for an individual contact card

import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($('#tmpl-contact-card').html());

    this.modalTemplate = _.template($('#tmpl-contact-details').html());

    this.contactInfo = {
      name: this.model.get('name'),
      phone: this.model.get('phone'),
      email: this.model.get('email')
    };

    _.extend(this.contactInfo, Backbone.Events);

    this.listenTo(this, "showContactDetails", this.viewDetails);

    this.toggleDetails();
  },

  render: function() {
    var html = this.template({name: this.model.get('name')});
    // console.log("===========" + this.model.attributes);
    this.$el.html(html);
    return this;
  },

  events: {
    'click .contact-card': 'showDetails'
  },

  showDetails: function() {
      console.log("SHOW SOME DETAILS HERE" + this.contactInfo.name);
      //trigger something
      this.trigger("showContactDetails");
    },

  toggleDetails: function(onIndicator) {
    $('#contact-details').toggle(onIndicator);
  },

  viewDetails: function() {
    //show the details card somehow - ask google
    this.toggleDetails();

    var html = this.modalTemplate({name: this.contactInfo.name, email: this.contactInfo.email, phone: this.contactInfo.phone });
    
    $('#contact-details').html(html);

    console.log("VIEWING THE DETAILS CARD of: " + this.contactInfo.name); // TODO: how to we access the details of this contact
  }
});

// var ModalView = Backbone.ModalView.extend({
//   name: "ModalView",
//   model: this.model,
//   template: _.template($('#tmpl-contact-details').html()),
//   initialize: function() {
//     _.bindAll(this, "render");
//     this.template = _.template(this.template);
//   },
//   events: {
//     'click .contact-card': 'showDetails'
//   },
//
//   // showDetails: function() {
//   //   console.log("SHOW SOME DETAILS HERE");
//   //   //trigger something
//   //   this.trigger("showContactDetails");
//   // },
//
//   render: function () {
//     $(this.el).html(this.template());
//     return this;
//   }
// });

export default ContactView;
