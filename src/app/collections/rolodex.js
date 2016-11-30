// This collection represents an ordered list of Contact models

import Backbone from 'backbone';
import Contact from 'app/models/contact';

const Rolodex = Backbone.Collection.extend({
  model: Contact,
});

export default Rolodex;
