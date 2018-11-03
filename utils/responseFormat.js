const moment = require('moment');
module.exports = (req, res, next) => {
  let body = {};
  if (req.body) {
    body = { ...req.body };
    if (body.password) {
      body.password = null;
      delete body.password;
    }
  }
  console.log(
    moment().format('LLLL'),
    '::',
    req.protocol,
    req.path,
    body,
    req.query,
    req.params,
    req.session && req.session.key
  );
  res.sendError = (err, msg = 'Internal server error', status = 500) => {
    err && console.log('[ERROR] ', err);
    console.log(msg);
    res.status(status).send({ success: false, msg });
  };
  res.sendSuccess = (data, msg, status = 200) => {
    console.log(msg);
    res.status(status).send({ success: true, msg, ...(data && { data }) });
  };
  next();
};
