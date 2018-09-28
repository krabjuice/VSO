module.exports = (sequelize, DataTypes) => {
    var Submitions = sequelize.define('submitions', {
        username: {
            type: DataTypes.STRING
        },  

        telegram: {
            type: DataTypes.STRING
        },

        selly: {
            type: DataTypes.STRING
        },

        proof: {
            type: DataTypes.TEXT    
        },
    });
    return Submitions;
};