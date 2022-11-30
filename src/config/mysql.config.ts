const mysqlConfig = require('../../config/mysql.config.json');

export const mysqlConf = {
    rtp_pol_web: {
        dialect: 'mysql',
        name: 'rtp_pol_web',
        autoLoadModels: true,
        synchronize: false,
        timezone: '+08:00',
        query: { raw: true },
        database: 'rtp_pol_web',
        ...mysqlConfig.rtp_pol_web,
    },
};
