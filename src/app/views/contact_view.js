import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());

    // Listen to our model, and re-render whenever it changes.
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log("creating a human contact: " + this.model.attributes.name);
    console.log(this.model.attributes);
    var html = this.template(
      { contact: this.model.attributes }
    );
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
    'dblclick': "showModalHandler",
  },

  showModalHandler: function(event) {
    event.stopPropagation();

    console.log("showModal Handler called!");
    $('#contact-details').show();
    // Compile a template for contact details
    var html = this.detailsTemplate(
          { contact: this.model.attributes }
        );
        $('#contact-details').html(html);
  }

});

export default ContactView;
