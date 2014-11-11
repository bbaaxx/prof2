import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'Profile 1',
    description: 'The description for profile 1',
    skillset: null,
    positionset: null,
    educationset: null
  },{
    id: 2,
    name: 'Profile 2',
    description: 'The description for profile 2',
    skillset: null,
    positionset: null,
    educationset: null
  }
];

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),
  skillset:       DS.belongsTo('skillset', {async:true}),
  positionset:     DS.belongsTo('positionset', {async:true}),
  educationset:   DS.belongsTo('educationset', {async:true})

}).reopenClass({FIXTURES:fixtures});
