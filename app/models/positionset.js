import DS from 'ember-data';

export default DS.Model.extend({

  positions:  DS.hasMany('position', {async:true}),
  profile:    DS.belongsTo('profile', {async:true})

});
