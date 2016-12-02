import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
	initialize: function(options) {

//GOING WITH EASY FOR NOW, MVP

		this.template = _.template($('#tmpl-contact-card').html());

		this.model = options.model

		this.listElement = this.$("contact-cards");

  }, //initialize end

  render: function() {

  	var html = this.template({name: this.model.attributes.name});
  // var html = this.model.attributes.name;

    console.log("red " + html);

  this.$el.html(html);


    // Enable chained calls
    return this;
  }, //render end

  addContact: function(contact) {
  	var card = new Contact({
  	model: contact,
  	template: this.template
  })
  },


});

export default ContactView;
