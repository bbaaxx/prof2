import DS from 'ember-data';

export default DS.Model.extend({

  skills:   DS.hasMany('skill', {async:true}),
  profile:  DS.belongsTo('profile', {async:true})

});
