// this is the view for an individual contact card

import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($('#tmpl-contact-card').html());

    this.modalTemplate = _.template($('#tmpl-contact-details').html());

    this.listenTo(this, "showContactDetails", this.viewDetails);
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

  // toggleDetails: function(onIndicator) {
  //   $('#tmpl-contact-details').toggle(!onIndicator);
  // },

  showDetails: function() {
    console.log("SHOW SOME DETAILS HERE");
    //trigger something
    this.trigger("showContactDetails");
  },

  viewDetails: function() {
    //show the details card somehow - ask google
    console.log("VIEWING THE DETAILS CARD");
  }
});

export default ContactView;
