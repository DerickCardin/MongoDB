const assert = require('assert');
const MarioChar = require('../Models/mariochar');
//describe tests

describe('deleting records', function(){

var char;    

   beforeEach(function(done){
       char = new MarioChar({
       name: 'Mario'
   });
   
   char.save().then(function(){
       done();
   }); 
   });
   
   
   
   //create tests
it('delete one record from the database', function(done){
    
   MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
       MarioChar.findOne({name: 'Mario'}).then(function(result){
           assert(result === null);
           done();
       });
   });
   
}); 
   
   
});


   
 