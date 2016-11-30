import Backbone from 'backbone';
import Contact from 'app/models/contact';
import $ from 'jquery';
import _ from 'underscore';


//Maybe set a variable to if the modal is showing or not and use something more like a toggle function...but you need to be able to click anywhere to close...

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.element = $('#contact-details');
  },
  render: function() {
    this.delegateEvents();

    var contactHTML = this.template({name: this.model.toJSON().name});
    this.$el.html(contactHTML);
    return this;
  },
  events: {
    'click .contact-card': 'showDetails',
    'click .btn-testing': 'hideDetails'
  },
  showDetails: function(){
    var detailsHTML = this.detailsTemplate({name: this.model.toJSON().name, email: this.model.toJSON().email, phone: this.model.toJSON().phone});
    this.element.html(detailsHTML);
    $('#contact-details').show();
    $('#application').addClass('popup');
    console.log("showing details");
  },
  hideDetails: function(){
    console.log("CLICKING");
    // $('#contact-details').hide();
    // $('#application').removeClass('popup');
  }
});

export default ContactView;
