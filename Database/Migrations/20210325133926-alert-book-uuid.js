'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Books', 'uuid', {
        type: Sequelize.STRING
      }),
      // queryInterface.addColumn('user_profiles', 'otpSendTime', {
      //   type: Sequelize.DATE,
      //   after: 'otp'
      // })
    ])
  },

  down: async (queryInterface, Sequelize) => { }
};
