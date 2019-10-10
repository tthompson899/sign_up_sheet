var con = require('./connection.js');

exports.signin = function(req,res){
  var data  = {
    first_name: 'Tiffany', 
    last_name: 'Thompson', 
    email: 'someone@email.com',
    slack: true
  };
  con.query('INSERT INTO users SET ? ? ? ?', data, function(err, result) {
    
  });
    res.render('DONE');
};