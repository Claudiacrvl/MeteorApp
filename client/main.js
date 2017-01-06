import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './main.css';
import './reset.css';

Template.claudia.helpers({
  serie: function(){
    return serie.find();
  }
})

Template.claudia.events({
  "click #add_serie": function (event, template)
  {
  var nouvel_serie = template.find("#nom_serie").value;
    serie.insert({name : nouvel_serie});
    template.find("#nom_serie").value = "";

    "click #star_1": function (event, template)
  {

  }

  },
  "click .delete_serie": function (event, template){
    serie.remove ({_id: this._id})
  }
});
