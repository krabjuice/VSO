module.exports = (sequelize, DataTypes) => {
    var Placeholder = sequelize.define('placeholder', {
        placeholder: DataTypes.STRING
    });
    return Placeholder;
};