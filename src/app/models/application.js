import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex'

const Application = Backbone.Model.extend({
  initialize: function() {
    console.log("Created application model");

  }
});

export default Application;
