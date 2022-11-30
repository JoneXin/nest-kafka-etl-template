import { KafkaModule } from './modules/kafka/kafka.module';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { kafkaOptions } from './config/sys.config';
import { mysqlConf } from './config/mysql.config';
import { CleanModule } from './modules/cleaning/clean.module';

@Module({
    imports: [SequelizeModule.forRoot(mysqlConf.rtp_pol_web), KafkaModule, CleanModule],
})
export class AppModule {}
