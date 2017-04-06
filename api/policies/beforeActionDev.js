/**
 * isAjax
 *
 * @module      :: Policy
 * @description :: ...

 *
 */
module.exports = function isAjax(req, res, next) {
  //institution id indent
  if (req.headers.institution === undefined){
    req.headers.institution = sails.config.data.institutionId;
  }

  return next();
};
