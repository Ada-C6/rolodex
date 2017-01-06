import Backbone from 'backbone';
import Contact from 'app/models/contact.js'

const Rolodex = Backbone.Collection.extend({
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
  model: Contact
});

export default Rolodex;
