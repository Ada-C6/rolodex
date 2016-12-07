import Backbone from 'backbone';
// import ApplicationView from 'app/views/application_view'
import Rolodex from 'app/collections/rolodex'
import Contact from 'app/models/contact'


const Application = Backbone.Model.extend({
  // This model represents the overall application.
  // 
  // initialize: function() {
  //   console.log("Created new contactList");
  //   this.staticContact = new Rolodex(contactData);
  // }
});

export default Application;
