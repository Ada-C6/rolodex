import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({

  initialize: function(options) {
    this.template = options.template;
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.attributes);
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);

    // Re-attach DOM event listeners
    this.delegateEvents();

    // Enable chained calls
    return this;
  },

  events: {
    "click": "modalHandler"
  },

  modalHandler: function(event) {
    console.log("modalHandler called!");
    var templateContainer = _.template($('#tmpl-contact-details').html());
    var templateContents = templateContainer({
      name: this.model.attributes.name,
      email: this.model.attributes.email,
      phone: this.model.attributes.phone
    });
     $('#contact-details').show();
     $('#contact-details').html(templateContents);
   }
});

export default ContactView;
