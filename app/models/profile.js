import DS from 'ember-data';

export default DS.Model.extend({

  skillset:       DS.belongsTo('skillset', {async:true}),
  positionset:     DS.belongsTo('positionset', {async:true}),
  educationset:   DS.belongsTo('educationset', {async:true})

});
