import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function(){
    var contact = new Contact();
    console.log(contact.attributes.name);
    var html = this.template({name: contact.attributes.name});
    this.$el.html(html);
    return this;
  }
});

export default ContactView;
