import Backbone from 'backbone';
import Contact from 'app/models/contact'

const RolodexView = Backbone.View.extend({
  model: Contact;
});

export default RolodexView;
