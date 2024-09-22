const Sequelize = require('sequelize');

const sequelize = new Sequelize("user_address_db", "root", "Your_Password",{
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate()
    .then(() => {
        console.log('connection to myql database has established successfully');
    })
    .catch(() => {
        console.log('unable to connect to database',err);
    });

module.exports = sequelize;
