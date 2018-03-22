const assert = require('assert');
const EmpObj = require('../models/employeeModel');

// Describe our tests
describe('Saving records', function(){
this.timeout(5000); // this test can take up to 5 seconds
  // Create tests
  it('Saves employee record to the database', function(done){

    const char = new EmpObj({
      name: "AD",
      city: "Bhopal",
      center: "Gt",
      address: "Bhel Area Bhopal",
      dob: "01/01/1989",
      mobile: "970937855",
      email: "ad89@gmail.com",
      experience: "2"
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });

  });

});
