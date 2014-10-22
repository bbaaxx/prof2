import DS from 'ember-data';

export default DS.Model.extend({

  name:           DS.attr('string'),
  certification:  DS.attr('string'),
  education:      DS.belongsTo('education', {async:true})

});
