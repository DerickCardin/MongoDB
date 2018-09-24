const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../Models/mariochar');
//describe tests

describe('saving records', function(){
   
   //create tests
it('saves record to the database', function(done){
    
    
   var char = new MarioChar({
       name: 'Mario'
   });
   
   char.save().then(function(){
       assert(char.isNew === false);
       done();
   });
   
}); 
   
   
});