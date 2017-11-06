const Employee = require('../models/employee'); // Import User Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database');

module.exports = (router) => {

  router.post('/add_employee', (req, res) => {
   console.log(req.body);

   let employee = new Employee({
     first_name:req.body.first_name.toLowerCase(),
     last_name:req.body.last_name.toLowerCase(),
     email:req.body.email.toLowerCase(),
     dob: Date(req.body.dob),
     gender:req.body.gender.toLowerCase(),
     employee_id:req.body.employee_id,
     joining_date:Date(req.body.joining_date),
     skill:req.body.skill,
     designation:req.body.designation,
     interview_comments:req.body.interview_comments,
     islead:(req.body.islead == 'true'),
     phone: req.body.phone,
     current_address:{
            street: req.body.current_street,
            city: req.body.current_city,
            state: req.body.current_state,
            zip: req.body.current_zip
          },
     permanent_address:{
                 street: req.body.permanent_street,
                 city: req.body.permanent_city,
                 state: req.body.permanent_state,
                 zip: req.body.permanent_zip
      }
   });

   employee.save((err) => {
   		if(err)
   		{
   			res.json({success: false,message: 'failed to add employee'});
   		}
   		else
   		{
        res.json({ success: true, message: 'Acount registered!' });
   		}
   	});

    });

  router.get('/list_employee', (req, res) => {
  	Employee.find("",'employee_id first_name last_name email',function(err,employee){
      if(err)
        res.json({ success: false, message: 'Could not list down Employee. Error: ', err });
      else
  		res.json(employee);
  	})
  });

  return router;
}
