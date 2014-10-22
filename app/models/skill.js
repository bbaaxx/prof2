import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'Javascript Development',
    indicators: [1]
  }, {
    id: 2,
    name: 'Project Management',
    indicators: [1]
  }
];

export default DS.Model.extend({

  name: DS.attr('string'),
  indicators: DS.hasMany('skill-indicator', {async:true}),


}).reopenClass({ FIXTURES: fixtures });
