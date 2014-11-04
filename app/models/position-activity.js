import DS from 'ember-data';

export default DS.Model.extend({

  name:   DS.attr('string'),
  desctiption:    DS.attr('string'),
  skills:             DS.hasMany('skill', {async:true}),
  positions:          DS.hasMany('position', {async:true})

});
