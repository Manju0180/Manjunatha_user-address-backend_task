const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");
const User = require("./userModel");

const Address = sequelize.define("Adress", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    addressLine: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            modal: User,
            key: 'id',
        },
    },
},
{
    timestamps: false,
    tableName:"Addresses"
});

module.exports = Address;
