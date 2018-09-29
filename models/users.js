module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('users', {
        verified: {
            type: DataTypes.STRING    
        },

        username: {
            type: DataTypes.STRING
        },  

        telegram: {
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