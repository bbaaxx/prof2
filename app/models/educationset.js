import DS from 'ember-data';

export default DS.Model.extend({

  profiles:     DS.belongsTo('profile', {async:true}),
  educations:   DS.hasMany('education', {async:true})

});
