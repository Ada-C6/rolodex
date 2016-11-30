// rolodex holds the contact cards plus its own stuff
import Backbone from 'backbone';

const Rolodex = Backbone.Collection.extend({
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
});

$(document).ready(function){
  var rolodex = new Rolodex();
  var application = new ApplicationView({
    el: $('application')
    // model goes here, later, I think
  });
}
export default Rolodex;
