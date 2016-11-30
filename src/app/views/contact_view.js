import Backbone from 'backbone';
import Contact from 'app/models/contact';
import $ from 'jquery';
import _ from 'underscore';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.element = $('#contact-details');
  },
  render: function() {
    var contactHTML = this.template({name: this.model.toJSON().name});
    this.$el.html(contactHTML);
    return this;
  },
  events: {
    'click .contact-card': 'showDetails',
  },
  showDetails: function(){
    var detailsHTML = this.detailsTemplate({name: this.model.toJSON().name, email: this.model.toJSON().email, phone: this.model.toJSON().phone});
    this.element.html(detailsHTML);
    $('#contact-details').show();
    console.log("showing details");
  }
});

export default ContactView;
