const assert = require('assert');
const ExamObj = require('../models/examModel');

// Describe our tests
describe('Saving records', function(){
  // Create tests
  it('Saves Exam record to the database', function(done){
    this.timeout(5000); // this test can take up to 5 seconds
    const char = new ExamObj({
      examTital: 'CHSL',
      description: 'SSC',
      orgniser: 'Sify',
      examDate: Date(),
      shift: 3,
      count: 550,
      requirememnt: 'window systems'
    });

    char.save().then(function(){
      // this.timeout(5000); // this test can take up to 5 seconds
      // // this.timeout(500);
      // setTimeout(done, 3000);
      assert(!char.isNew);
      done();
    });

    // beforeEach(function(done) {
    //   this.timeout(3000); // A very long environment setup.
    //   setTimeout(done, 2500);
    // });

  });

});
