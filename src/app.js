import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactsData = [
  {
    name: "Pancho Perez",
    email: "ju kidin me? we no got no fones!",
    phone: "dos latas y un cordel"
  },
  {
    name: "Juanita Sanchez",
    email: "pero y este que se piensa?",
    phone: "guan-tu...que dice?"
  },
  {
    name: "Perequita Pita",
    email: "hay que encenderle una velita a San Lazaro",
    phone: "oigo???"
  }
];

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});
