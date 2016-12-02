//  This view handles logic for a single contact
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.template = options.template;
  },

  render: function() {
    var html = this.template({contact:  this.model.attributes}); //don't forget! this gives us the name when we say contact.name
    this.$el.html(html);
    // this.delegateEvents();
        console.log("contact is " + this.model.attributes.name);
        console.log("contact is " + this.model.attributes);

    // Enable chained calls
    return this;
  },

  events: {
   'click .contact-card': 'showDetails',
  //  'click .btn-cancel': 'clearInput'
 },

 showDetails: function() {
   console.log("You've clicked the contact card");
   //we want to pull up the template that has the contact details (#'templ-contact-details')

   //we gotta feed it data to show up
 },
});

export default ContactView;
