import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template; // name only contact card
  },

  render: function(){
    var html = this.template({name: this.model.attributes.name});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    'click .contact-card': 'triggerDetails' // send trigger when specific card is clicked
  },

  triggerDetails: function(e){
    e.stopPropagation(); // don't let any parents hear this event
    this.trigger('details', this.model); // send this contact model to the roloview listener
  }
});

export default ContactView;
