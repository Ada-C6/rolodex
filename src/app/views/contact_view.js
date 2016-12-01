import Backbone from 'backbone';
import Contact from 'app/models/contact';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    console.log("You're in the ContactView initialize function");
    console.log(options);
    this.contact = options.contact;
    console.log(this.contact);

    this.template = options.cardTemplate;
    console.log(this.template);



    console.log("77777777777777777777");
    console.log(this.$el);



    // Locate the modal in the html file and generate a template for it
    this.modalPlacement = this.$('#contact-details');
    this.modalTemplate = _.template($('#tmpl-contact-details').html());

  },
  render: function() {
    this.cardPlacement = $('#contact-cards');
    console.log("&&&&&&&&&&&&&&&&&&");
    console.log(this.$el);

    console.log("You're in the ContactView render function");
    console.log("******** You're dealing with:" + this.contact.name);

    var html = this.template({name: this.contact.name, phone: this.contact.phone, email: this.contact.email});

    console.log("You've just generated some html");
    // console.log(html);

    this.$el.append(html);

    return this;
  },

  events: {
    'click .contact-card' : 'showModal',
  },

  showModal: function(event) {
    console.log("I'm trying to show the modal");
    this.modalPlacement.show();

    var clicked = $(event.target).text();
    // var data = clicked.data();
    // var name = h4[0].innerText;

    console.log(clicked);
  },

  hideModal: function() {
    // THIS IS BROKEN!
    this.modalPlacement.hide();
  },
});

export default ContactView;
