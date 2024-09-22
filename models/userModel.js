const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps:false,
    tableName:"Users"
});

module.exports = User;