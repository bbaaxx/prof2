import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'Javascript Development',
    indicators: [1]
  }, {
    id: 2,
    name: 'Project Management',
    indicators: [2]
  }, {
    id: 3,
    name: 'Problem solving',
    indicators: [2]
  }
];

export default DS.Model.extend({

  name:         DS.attr('string'),
  indicators:   DS.hasMany('skill-indicator', {async:true}),
  skillsets:    DS.hasMany('skillset', {async:true}),
  activities:   DS.hasMany('position-activity', {async:true})

}).reopenClass({ FIXTURES: fixtures });
