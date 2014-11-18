import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'Customer support',
    description: 'Technical support in English and Spanish for DELL customers in Latin-America and the Caribbean.'
  }
];

export default DS.Model.extend({

  name:         DS.attr('string'),
  description:  DS.attr('string'),
  skills:       DS.hasMany('skill', {async:true}),
  positions:    DS.hasMany('position', {async:true})

}).reopenClass({FIXTURES: fixtures});
