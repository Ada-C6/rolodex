import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({

  initialize: function(options) {
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());//template provided in script tag in index.html
    this.contactTemplate = _.template($('#tmpl-contact-details').html()); //script template for contact details
    this.input = options.input;
    this.collection = options.collection;
  },

  render: function() {
    this.delegateEvents();//bind events after they are emptied in rolodexview element
    var html = this.rolodexTemplate(this.model.attributes); //pass model attributes to template
    this.$el.html(html); //creates div tag with above html elements inside

    // Enable chained calls
    return this;
  },

  events: {
    'click .contact-card': 'getDetail',
  },

  getDetail: function(event){
    this.trigger("deetsplz", this.model);
  }

});

export default ContactView;
