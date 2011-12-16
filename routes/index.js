
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.spotify = function(req,res){
  res.render('spotify',{title:'spotify'})
}
