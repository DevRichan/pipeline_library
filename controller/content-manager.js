const library = require("./librarySchema")

exports.post_data = function(req,res,next){
    library.create(req.body).then(function(library){
        res.send(library);
    }).catch(next);
}
