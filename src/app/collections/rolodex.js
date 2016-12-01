import Backbone from 'backbone';
import Contact from 'app/models/contact';
const Rolodex = Backbone.Collection.extend({
  model: Contact
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
});

export default Rolodex;
