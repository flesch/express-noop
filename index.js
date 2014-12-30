module.exports = function noop(){
  return function(req, res, next){
    next();
  };
};
