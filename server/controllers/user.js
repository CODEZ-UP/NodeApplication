


exports.auth = function(req, res){

}

exports.register = function(req, res){

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmationPassword = req.body.confirmationPassword;

    res.json({ username, email });
    

}