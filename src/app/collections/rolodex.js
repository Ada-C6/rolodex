// This collection represents an ordered list of Contact models

//Wave 2: Rolodex.js is set up to be a collection
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const Rolodex = Backbone.Collection.extend({
  model: Contact,
});

export default Rolodex;
