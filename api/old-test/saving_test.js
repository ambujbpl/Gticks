const assert = require('assert');
const LoginObj = require('../models/loginModel');

// Describe our tests
describe('Saving records', function(){
this.timeout(5000); // this test can take up to 5 seconds
  // Create tests
  it('Saves a record to the database', function(done){

    const char = new LoginObj({
      name: 'AD',
      user: 'admin',
      password: 'password',
      role: 'Admin'
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });

  });

});
