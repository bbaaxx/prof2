import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'Electronic Data Systems (now a part of Hewleet Packard)',
    positions: [1]
  }, {
    id: 2,
    name: 'Getronics Services (now a part of KPN)',
    positions: [2]
  }
];

export default DS.Model.extend({

  name:       DS.attr('string'),
  positions:   DS.hasMany('position', {async:true})

}).reopenClass({FIXTURES:fixtures});
