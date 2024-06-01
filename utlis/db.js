const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://kuusmaa:qwerty@localhost:3306/user_notes');

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error(' Unable to connect to the database:', error);
});

module.exports = sequelize