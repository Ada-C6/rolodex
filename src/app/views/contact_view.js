import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Contact from 'app/models/contact';


const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
    // this.listenTo(this.model, "change", this.render);
  },
  render: function() {
  // reconnects the DOM event Handlers
  this.delegateEvents();
  //could use .toJSON() instead of .attributes
  var html = this.template(this.model.attributes);
  this.$el.html(html);
  // Enable chained calls
  // This is important enough that we'll leave it in, but
  // we wont talk about it until later.
  return this;
  },
  events: {
    'click .contact-card': 'showModal'
  },
  showModal: function() {
    var detailsTemplate = _.template($('#tmpl-contact-details').html());
    var html = detailsTemplate({
      name: this.model.attributes.name,
      email: this.model.attributes.email,
      phone: this.model.attributes.phone
    });
      $('#contact-details').show();
      $('#contact-details').html(html);
  }
});

export default ContactView;
