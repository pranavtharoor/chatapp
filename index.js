require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressSession = require('express-session');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const models = require('./models');
const redisStore = require('./config/redis').store(expressSession);
const routes = require('./routes');
const responseFormat = require('./utils/responseFormat');
const sessionSecret = require('./config/session').secret;
const handleSocketIO = require('./socketio');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);
const session = expressSession({
  resave: false,
  saveUninitialized: false,
  secret: sessionSecret,
  store: redisStore,
  cookie: {
    httpOnly: false, //@TODO
    maxAge: 604800000
  }
});

app.use(logger('dev'));
app.use(session);
app.use(cookieParser('secret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseFormat);
app.use('/api', routes);

io.use((socket, next) => session(socket.request, socket.request.res, next));
handleSocketIO(io);

const port = 3000;

models.sequelize
  .sync()
  .then(
    () => server.listen(port, () => console.log('Listening on port ' + port)),
    console.log
  );
