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

  router.get('/employee/:id', (req, res) => {

    if (!req.params.id) {
      res.json({ success: false, message: 'No Employee ID was provided.' }); // Return error message
    } else {

      employee.findOne({ _id: req.params.id }, (err, emp) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid Employee id' }); // Return error message
        } else {
          if (!emp) {
            res.json({ success: false, message: 'Employee not found.' }); // Return error message
          } else {
          res.json({ success: true, emp: emp });1 // Return success     
          }
        }
      });
    }
  });

  /* ===============================================================
     UPDATE  employee
  =============================================================== */
  router.put('/updateEmployee', (req, res) => {
    // Check if id was provided
    if (!req.body._id) {
      res.json({ success: false, message: 'No Employee id provided' }); // Return error message
    } else {
      // Check if id exists in database
      employee.findOne({ _id: req.body._id }, (err, emp) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid Employee id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!emp) {
            res.json({ success: false, message: 'Employee id was not found.' }); // Return error message
          } else {
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
            emp.save((err) => {
                  if (err) {
                        if (err.errors) {
                          res.json({ success: false, message: 'Please ensure form is filled out properly' });
                        } else {
                          res.json({ success: false, message: err }); // Return error message
                        }
                      } else {
                        res.json({ success: true, message: 'Employee Updated!' }); // Return success message
                      }
              });
        }
      });
    }
  });

  return router;
}






