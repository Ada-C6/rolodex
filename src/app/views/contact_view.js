import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Contact from 'app/models/contact';

// var ContactDetailsView = Backbone.View.extend({
//
// });

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    // this.listenTo()
  },

  render: function(){
    // var contact = new Contact();
    // console.log(contact.attributes.name);
    var html = this.template({name: this.model.attributes.name});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    'click .contact-card': 'triggerDetails'
  },

  triggerDetails: function(e){
    // console.log('this is the trigger sending');
    // console.log(this.model.attributes);
    e.stopPropagation();
    this.trigger('details', this.model);
    // return false; // use stop propogation here
  }
});

export default ContactView;
