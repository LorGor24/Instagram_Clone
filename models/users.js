'use strict';
module.exports = (sequelize, DataTypes) => {
  var insta_clone = sequelize.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  insta_clone.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
