module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('users', {
        verified: {
            type: DataTypes.STRING    
        },

        username: {
            type: DataTypes.STRING
        },  

        telegramURL: {
            type: DataTypes.STRING
        },

        telegramUsername: {
            type: DataTypes.STRING
        },

        selly: {
            type: DataTypes.STRING
        },
        
        sellingInformation: {
            type: DataTypes.STRING
        }
    });
    return Users;
};