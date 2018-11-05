const express = require('express');
const router = express.Router();

const validator = require('../utils/validator');
const schemas = require('../schemas');

const auth = require('./auth');
const home = require('./home');
const conversations = require('./conversations');

function hasAccess(access) {
  // 0-> Default 10-> Member 20-> Admin
  return (req, res, next) => {
    if (
      req.session.key &&
      req.session.key.type &&
      req.session.key.type >= access
    )
      return next();
    else res.sendError(null, 'Not Authorized', 401);
  };
}

function isNotLoggedIn(req, res, next) {
  return next(); //@TODO
  if (!req.session.key) return next();
  else res.redirect('/');
}

router.post('/register', validator(schemas.auth.register), auth.register);
router.get(
  '/searchuser',
  hasAccess(10),
  validator(schemas.auth.searchUser),
  auth.searchUser
);
router.get('/logout', auth.logout);
router.post('/login', isNotLoggedIn, validator(schemas.auth.login), auth.login);
router.post(
  '/setPassword',
  isNotLoggedIn,
  validator(schemas.auth.setPassword),
  auth.setPassword
);

router.get('/init', home.init);
router.get('/conversations', hasAccess(10), conversations.fetchConversations);
router.post(
  '/startConversation',
  hasAccess(10),
  conversations.startConversation
);

router.get('/', (req, res) => {
  req.session.key = 'hello' + Math.random();
  req.session.save(() => {
    res.send(`
    <div id="c"></div>
    <form id="f">
      <input id="i" />
      <input id="j" />
      <button />
      </form>
      <script src="/socket.io/socket.io.js"></script>
      <script>
      var socket = io.connect();
      document.getElementById('f').addEventListener('submit', e => {
        e.preventDefault();
        socket.emit('send message', document.getElementById('i').value);
        socket.emit('broadcast message', document.getElementById('j').value);
        document.getElementById('i').value = '';
        document.getElementById('j').value = '';
      });
      socket.on('new message', data => document.getElementById('c').innerHTML += data);
      </script>
      `);
  });
});

module.exports = router;
