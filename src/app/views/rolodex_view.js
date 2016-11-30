import Backbone from 'backbone';
import $ from 'jquery';

const RolodexView = Backbone.View.extend({
  initialize: function(incomingContacts) {
    console.log("You've created the RolodexView");
    console.log(incomingContacts);

    this.contacts = incomingContacts.contacts;
    this.template = incomingContacts.template;
  },
  render: function() {
    console.log("You are rendering the RolodexView");
    console.log(this);

    this.placement = $("#contact-cards");

    this.contacts.forEach(function(individualContact){
      console.log("You're in the RolodexView initialize one contact!");
      console.log(individualContact.attributes.name);
      console.log(this.template);


      var html = this.template({name: individualContact.attributes.name, email: individualContact.attributes.email, phone: individualContact.attributes.phone});

      this.placement.append(html);
    }, this);

    return this;
  }
});

export default RolodexView;
