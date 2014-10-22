import DS from 'ember-data';

export default DS.Model.extend({

  shortDesctiption:   DS.attr('string'),
  fullDesctiption:    DS.attr('string'),
  skills:             DS.hasMany('skill', {async:true}),
  positions:          DS.hasMany('position', {async:true})

});
