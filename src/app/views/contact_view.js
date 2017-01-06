import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';

//DONE__FOR WAVE 3 MODAL, I NEED TO ADD THE MODAL template
//ADD AN EVENT SO THAT WHEN SOMEONE CLICKS ON THE CONTACT THE MODAL APPEARS
//FILL THE CONTACT DETAILS INTO THE MODAL

//OK. HOW CAN GET THE DETAILS INTO THE TEMPLATE

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.model = options.model

    this.template = _.template($('#tmpl-contact-card').html());
    this.listElement = this.$('.contact-card');


    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.element = $('#contact-details');
  },
  events:{
    'click .contact-card':'showDetails'
  },
  showDetails: function(){
    var innerText = this.detailsTemplate({name: this.model.get("name"), email: this.model.get("email"), phone: this.model.get("phone") });
    this.element.html(innerText);
    $("#contact-details").show();
    console.log(this.model)
  },
  render: function(){
    this.delegateEvents();
    this.listElement.empty();


    var html = this.template(this.model.toJSON());

    this.$el.html(html);

    return this;
  }

});

export default ContactView;
