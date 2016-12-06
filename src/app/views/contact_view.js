import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.task = options.task;
    console.log(options);
    //have to tell backbone how to handle it
    this.template = options.template;
    this.contactTemplate = _.template($('#tmpl-contact-details').html());

    this.listenTo(this.model, 'change', this.render);

  },

  events: {
    'click .contact-card': 'showContact'
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
      //will create a freestanding div to put into the page to be part of the DOM once it is appended
    this.$el.html(html);

    //re-attach DOM event listeners to our brand-spankin-new HTML
    this.delegateEvents();
    // Enable chained calls
    return this;
  },

  showContact: function() {
    event.stopPropagation();

    $('#contact-details').show();

    var contactDetails = this.contactTemplate({contact:this.model.attributes});
    $('#contact-details').html(contactDetails);
  }
});

export default ContactView;
