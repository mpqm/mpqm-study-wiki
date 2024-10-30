
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        isAdult: { type: Sequelize.BOOLEAN }
    });
    return User;
}