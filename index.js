module.exports = function noop(condition, middleware){
  return function(req, res, next){
    if (condition && typeof middleware === 'function') {
      middleware(req, res, next);
    } else {
      next();
    }
  }
};
