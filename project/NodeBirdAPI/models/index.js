const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';          // 기본 값을 설정해 놓지 않으면 development
const config = require('../config/config')[env];            // config.json의 development 영역

const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const Domain = require('./domain');

const db = {};

// sequlize connetion 생성
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Domain = Domain;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Domain.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Domain.associate(db);

module.exports = db;