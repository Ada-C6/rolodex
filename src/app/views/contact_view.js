import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function(){
    var html = this.template({name: this.model.attributes.name});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    'click .contact-card': 'triggerDetails'
  },

  triggerDetails: function(e){
    e.stopPropagation();
    this.trigger('details', this.model);
  }
});

export default ContactView;
