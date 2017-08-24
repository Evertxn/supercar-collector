module.exports = function(sequelize, DataTypes) {
    var Supercar = sequelize.define("Supercar", {
        car_name: DataTypes.STRING,
        collected: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
    return Supercar;
};
