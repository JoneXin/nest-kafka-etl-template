const sysConfig = require('../../config/sys.config.json');

interface SysStruct {
    kafka_conf: { brokers: string; groupId: string };
}

export const sysConf = sysConfig as SysStruct;

// kafka client config
export const kafkaOptions = {
    client: {
        clientId: sysConf.kafka_conf.groupId,
        brokers: [sysConf.kafka_conf.brokers],
    },
    consumer: {
        groupId: sysConf.kafka_conf.groupId,
    },
};
