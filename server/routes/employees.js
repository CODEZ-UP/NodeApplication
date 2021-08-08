const express = require("express");
const router = express.Router();
const Employee = require('../models/employee');

router.get('', function(req, res){
    Employee.find({}, function( err , foundEmployees) {
        res.json(foundEmployees);
    })
});

router.get('/:id', function(req, res){
    const employeeId = req.params.id;
    Employee.findById(employeeId, function(err, foundEmployee) {
        if(err)
        {
            res.status(422).send({ errors : [{title : "Employee Error !!!" , detail: "Could not find Employee with ID"}]});
        }
        res.json(foundEmployee);
    });
})

module.exports = router;