import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('education-qualification', 'EducationQualification', {
  // Specify the other units that are required for this test.
  needs: ['model:education']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
