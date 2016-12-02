import Backbone from 'backbone';

const Contact = Backbone.Model.extend({

//options refers to the "el" in contact
  initialize: function(options) {
    this.Template = _.template($('#tmpl-contact-card').html());
    console.log("contact card initialized");
  },

});

export default Contact;
