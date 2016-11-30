import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

// import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($('#tmpl-contact-card').html());
  },

  render: function() {
    console.log("Loaded a ContactView!");
    var html = this.template({
      name: this.model.name,
    });
    console.log("Name: " + this.model.name);
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
