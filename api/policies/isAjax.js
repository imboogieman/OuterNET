/**
 * isAjax
 *
 * @module      :: Policy
 * @description :: ...

 *
 */
module.exports = function isAjax(req, res, next) {

  // User is allowed
  if (req.wantsJSON) {
    return next();
  }

  // User is not allowed
  return res.forbidden('You are not permitted to perform this action.');
};
