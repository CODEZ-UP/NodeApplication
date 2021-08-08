const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const Employee = require('./models/employee');
const FakeDb = require('./fake-db');

const employeeRoutes = require('./routes/employees');
const userRoutes = require('./routes/users');

mongoose.connect(config.DB_URI , { useNewUrlParser : true }).then(() => {

    const fakeDb = new FakeDb();
    fakeDb.seedDb();

});

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log("Node Server is Running");
});