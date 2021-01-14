const Sequelize = require('sequelize');

module.exports = class Domain extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      host: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('free', 'premium'),        // 상세 타입 열거
        allowNull: false,
      },
      clientSecret: {
        type: Sequelize.STRING(36),                     // Sequelize.UUID(MySQL은 UUIDV4 지원X, Postgre는 지원 O)
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Domain',
      tableName: 'domains',
    });
  }

  static associate(db) {
    db.Domain.belongsTo(db.User);
  }
};