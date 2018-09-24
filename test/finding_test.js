const assert = require('assert');
const MarioChar = require('../Models/mariochar');
//describe tests

describe('finding records', function(){
   beforeEach(function(done){
      var char = new MarioChar({
       name: 'Mario'
   });
   
   char.save().then(function(){
       assert(char.isNew === false);
       done();
   }); 
   });
   
   
   
   //create tests
it('finds one record from the database', function(done){
    
    MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result.name === 'Mario');
        done();
    });
   
}); 
   
   
});