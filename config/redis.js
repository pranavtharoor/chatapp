const redis = require('redis');
const client = redis.createClient();

const redisConfig = {
  host: 'localhost',
  port: 6379,
  client: client,
  ttl: 604800
};

exports.redisClient = client;

module.exports.store = session => {
  const redisStore = require('connect-redis')(session);
  return new redisStore(redisConfig);
};
