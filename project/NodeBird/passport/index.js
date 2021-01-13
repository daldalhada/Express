const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);      // 세션에 user의 id만 저장
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
       // req.user로 접근하거나 req.isAuthenticated() 함수가 true
      .then(user => done(null, user))   
      .catch(err => done(err));
  });

  local();
  kakao();
};