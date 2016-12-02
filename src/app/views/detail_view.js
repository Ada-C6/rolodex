// detail_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const DetailView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
  },

  render: function(){
    var html = this.template({
      name: this.model.get("name"),
      email: this.model.get("email"),
      phone: this.model.get("phone"),
    });
    this.$el.html(html);

    return this;
  },

  
});

export default DetailView;
