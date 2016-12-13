import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Placeholder Name",
    phone: "Placehold Phone",
    email: "Placeholder Email"
  },
});

export default Contact;
