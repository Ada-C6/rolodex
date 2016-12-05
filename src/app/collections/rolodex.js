import Backbone from 'backbone';
import Contact from 'app/models/contact';
import Application from 'app/models/application';

const Rolodex = Backbone.Collection.extend({
    contact: Contact,
    application: Application
});
  export default Rolodex;
