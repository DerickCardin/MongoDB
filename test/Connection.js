const mongoose = require('mongoose');


//ES6 Promises
mongoose.Promise = global.Promise;

//connect to the db before tests run
before(function(done){
  //Connect to mongodb
mongoose.connect('mongodb://test:testing1@ds259732.mlab.com:59732/derickcardin');

mongoose.connection.once('open', function(){
   console.log('Connection has been made. now make fireworks...'); 
done();
}).on('error', function(error){
    console.log('Connection error:', error);
});  
});



