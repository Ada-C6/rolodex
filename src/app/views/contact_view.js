import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());

  },
  render: function() {
    console.log(this.model.attributes);
    console.log("This should be the name: " + this.model.get('name'));
    var html = this.template({name: this.model.get('name')});
    this.$el.html(html);

    return this;
  },
  events: {
    'mouseenter .contact-card': "showContactDetails",
    'mouseleave .contact-card': "hideContactDetails"
  },

  showContactDetails: function(event) {
    event.preventDefault();
    console.log("hovered over a thing");
    var name = this.model.get('name');
    var email = this.model.get("email");
    var phone = this.model.get('phone');
    $('#contact-details').html(this.detailsTemplate({email: email, name: name, phone: phone}));
    $('#contact-details').toggle();
  },

  hideContactDetails: function(event) {
    console.log("stopped hovering over the thing");
    $('#contact-details').toggle();
  }

});

export default ContactView;
