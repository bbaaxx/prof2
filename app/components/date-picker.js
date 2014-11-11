import Ember from 'ember';

export default Ember.TextField.extend({
  date: null,
  picker: null,

  // TODO: Test this troughly because an infinite loop is nasty
  updateValue: function() {
    var date = moment(new Date(this.get('date')));
    if (date.isValid()) {
      this.set('value', date.format('L'));
      this.get('picker').setDate(date.format('L'));
    } else {
      this.set('value', null);
    }
  }.observes('date'),
  updateDate: function() {
    var date = moment(new Date(this.get('value')));
    if (date.isValid()) {
      this.set('date', date.toDate());
    } else {
      this.set('date', null);
    }
  }.observes('value'),

  didInsertElement: function(){
    this.set('picker', new Pikaday({
      field: this.$()[0],
      format: 'MM/DD/YYYY',
      yearRange: [1900,2020]
    }));
  },
  willDestroyElement: function(){
    var picker = this.get('picker');
    if (picker) {
      picker.destroy();
    }
    this.set('picker', null);
  }
});
