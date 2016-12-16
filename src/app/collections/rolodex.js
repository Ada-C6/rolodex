
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jQuery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import RolodexView from 'app/views/rolodex_view';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

var Rolodex = Backbone.Collection.extend({
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.

  model: Contact
});

export default Rolodex;
