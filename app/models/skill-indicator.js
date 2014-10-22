import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'Years using the skill',
    metric: 1,
    value: 3
  }, {
    id: 2,
    name: 'Projects on which the skill was used',
    metric: 2,
    value: 1
  }
];

export default DS.Model.extend({

  name: DS.attr('string'),
  metric: DS.belongsTo('skill-metric', {async: true}),
  value: DS.attr('number'),
  availableMetrics: function(){
    return this.store.findAll('skill-metric');
  }.property()

}).reopenClass({FIXTURES:fixtures});
