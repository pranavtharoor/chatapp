const { user } = require('../models');
const to = require('../utils/to');
const uuidv1 = require('uuid/v1');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const mailerConfig = require('../config/mailer');
const fetch = require('node-fetch');
const endpoints = require('../config/endpoints');
const { Op } = require('sequelize');

exports.register = async (req, res) => {
  let [err, newUser] = await to(
    user.findOne({
      where: { email: req.body.email },
      attributes: ['name', 'email']
    })
  );
  if (err) return res.sendError(err);
  if (newUser) return res.sendError(null, 'User already exists', 409);
  const password = await uuidv1();
  [err, newUser] = await to(user.create({ ...req.body, password }));
  if (err && err.original && err.original.code === 'ER_DUP_ENTRY')
    return res.sendError(null, 'User data exists', 409);
  else if (err) return res.sendError(err);

  const regLink = {
    name: newUser.name,
    token: password,
    toEmail: newUser.email
  };
  let mailData, resp;
  [err, resp] = await to(
    fetch(endpoints.mail + '/chat/register', {
      method: 'POST',
      headers: {
        Authorization: mailerConfig.key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(regLink)
    })
  );
  if (err) console.log(err);
  if (err) return res.sendSuccess(null, 'User registered. Mail not sent');
  [err, mailData] = await to(resp.json());
  if (err) return res.sendSuccess(null, 'User registered. Mail not sent');
  res.sendSuccess(newUser, 'User registered.');
};

exports.setPassword = async (req, res) => {
  let err, userData, salt, hash;
  [err, userData] = await to(
    user.findOne({
      where: {
        password: req.body.token
      },
      attributes: ['email', 'type', 'id']
    })
  );
  if (err) return res.sendError(err);
  if (!userData || userData.type !== 0)
    return res.sendError(null, 'Password already set', 409);
  [err, salt] = await to(bcrypt.genSalt(10));
  if (err) return res.sendError(err);
  [err, hash] = await to(bcrypt.hash(req.body.password, salt));
  if (err) return res.sendError(err);
  [err, userData] = await to(
    user.update(
      {
        password: hash,
        type: 10
      },
      {
        where: {
          id: userData.id
        }
      }
    )
  );
  if (err) return res.sendError(err);
  res.sendSuccess();
};

exports.login = async (req, res) => {
  let err, userData, isMatch;
  [err, userData] = await to(
    user.findOne({
      where: {
        email: req.body.email
      },
      attributes: ['password', 'id', 'type', 'name', 'email']
    })
  );
  if (err) return res.sendError(err);
  if (!userData) return res.sendError(null, 'Incorrect email or password', 401);
  [err, isMatch] = await to(
    bcrypt.compare(req.body.password, userData.password)
  );
  if (err) return res.sendError();
  if (userData.type === 0 || !isMatch)
    return res.sendError(null, 'Incorrect email or password', 401);
  userData.password = undefined;
  delete userData.password;
  userData.id = undefined;
  delete userData.id;
  req.session.key = userData;
  req.session.save(() => {
    res.sendSuccess(userData);
  });
};

exports.logout = (req, res) => {
  if (req.session.key)
    req.session.destroy(() => {
      res
        .clearCookie('connect.sid', { path: '/' })
        .sendSuccess(null, 'Logged out');
    });
  else
    res
      .clearCookie('connect.sid', { path: '/' })
      .sendSuccess(null, 'Logged out');
};

exports.searchUser = async (req, res) => {
  let [err, users] = await to(
    user.findAll({
      where: Sequelize.or(
        { email: { [Op.like]: `%${req.query.search}%` } },
        { name: { [Op.like]: `%${req.query.search}%` } }
      ),
      attributes: ['name', 'email', 'id']
    })
  );
  if (err) return res.sendError(err);
  res.sendSuccess(users);
};
