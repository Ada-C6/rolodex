import Backbone from 'backbone';
import Contact from 'app/models/contact';
import Application from 'app/models/application';

const Rolodex = Backbone.Collection.extend({
    contact: Contact,
    application: Application
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.


});
  export default Rolodex;
