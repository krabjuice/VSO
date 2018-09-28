module.exports = (sequelize, DataTypes) => {
    var Submissions = sequelize.define('submissions', {
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
    return Submissions;
};