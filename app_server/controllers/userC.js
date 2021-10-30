module.exports.userController = function(req, res, next) {
    res.render('userV');
  }
  module.exports.userAdd = function(req, res){
      var name = req.body.uname;
      res.send(name);
  }