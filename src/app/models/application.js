import Backbone from 'backbone';
import Contact from 'app/models/contact';

const Application = Backbone.Model.extend({
  // This model represents the overall application.
  initialize: function() {
    this.contact = new Contact();
  }
});

export default Application;
