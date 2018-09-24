const assert = require('assert');
const MarioChar = require('../Models/mariochar');
//describe tests

describe('finding records', function(){

var char;    

   beforeEach(function(done){
       char = new MarioChar({
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

it('finds one record by ID from the database', function(done){
    
    MarioChar.findOne({_id: char._id}).then(function(result){
        assert(result.id.toString === char._id.toString);
        done();
    });
   
}); 
   
 