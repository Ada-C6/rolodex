import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex'

var hardCodedContacts = [
  { name: "Small Fry", email: "smallfry@condiments.org", phone: "303-555-1000" },
  { name: "Wee Chip", email: "weechip@condiments.org", phone: "44 7700 900104"},
  { name: "Oui Jean", email: "ouijean@condiments.org", phone: "303-555-2000" },
  { name: "Baby-Q", email: "bbq@condiments.org", phone: "n/a, too young" }
];

const Application = Backbone.Model.extend({
  initialize: function() {
    this.rolodex = new Rolodex(hardCodedContacts);
  }
});

export default Application;
