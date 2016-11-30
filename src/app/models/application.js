import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';

var contactList = [
  {
    name: "Jenny",
    email: "jenny@tutone.com",
    phone: "867-5309"
  }, {
    name: "Jessica Rabbit",
    email: "jrabbit@toontown.com",
    phone: "555-0123"
  }, {
    name: "Elmer Fudd",
    email: "killdawabbit@hunter.com",
    phone: "KLondike 6-5000"
  }, {
    name: "Lisa Simpson",
    email: "saxophone.nerd@sprinfield.com",
    phone: "555-0420"
  }
];

const Application = Backbone.Model.extend({
  initialize: function() {
    this.rolodex = new Rolodex(contactList);
  }

});

export default Application;
