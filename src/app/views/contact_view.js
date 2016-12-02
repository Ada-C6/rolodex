import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template; //rolodex template passed from rolodexview
    this.contactTemplate = _.template($('#tmpl-contact-details').html()); //script template for contact details
  },

  render: function() {

    var html = this.template(this.model.attributes); //pass model attributes to template
    this.$el.html(html); //creates div tag with above html elements inside

    // Enable chained calls
    return this;
  },

  events: {
    'click .contact-card': 'getDetail'
  },

  getDetail: function(event){

    $('#contact-details').show(); //default hidden modal will show!

    var html = this.contactTemplate(this.model.attributes); //pass model attributes to contact details template
    $('#contact-details').html(html);//replaces html elements with new html elements with model attributes above
  },

});

export default ContactView;
