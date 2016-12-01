// Equivalent to taskList

import Backbone from 'backbone';

import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import RolodexView from 'app/views/rolodex_view';

var Application = Backbone.Collection.extend({
  model: Contact
});

export default Application;
