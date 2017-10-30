
const User = require('../models/user'); // Import User Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {

  /* ===============================================================
     Route to get user's data
  =============================================================== */
  router.get('/employee', (req, res) => {
    User.find(
	       function(err,contacts){
		       res.json(contacts);
	        })
   });

  router.delete('/employee/:id', (req,res,next) =>{
	User.remove({_id: req.params.id},function(err, result){
  		if(err)
   		 res.json({ success: false, message: err }); // Return error
  		else
  		   res.json({ success: true, message: result })
  	});

});

  return router;
}
