import Backbone from 'backbone';
import Contact from 'app/models/contact';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = _.template($('#tmpl-contact-card').html());
  },
  render: function() {
    this.placement = $('#contact-cards');

    console.log("You're in the ContactView render function");

    console.log("You're dealing with:" + this.contact);

    var html = this.template({name: this.contact.attributes.name, phone: this.contact.attributes.phone, email: this.contact.attributes.email});

    console.log("You've just generated some html");
    console.log(html);

    this.placement.html(html);
    console.log(this.placement);

    return this;
  }
});

export default ContactView;
