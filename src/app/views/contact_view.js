import Backbone from 'backbone';
import Contact from 'app/models/contact';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
  },
  render: function() {
    var contactHTML = this.template({name: this.model.toJSON().name});
    this.$el.html(contactHTML);
    return this;
  }
});

export default ContactView;
