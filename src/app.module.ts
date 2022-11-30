import { UploadModule } from './modules/upload/upload.module';
import { KafkaModule } from './modules/kafka/kafka.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { mysqlConf } from './config/mysql.config';
import { CleanModule } from './modules/cleaning/clean.module';
import { StrategyModule } from './modules/strategy/strategy.module';

@Module({
    imports: [SequelizeModule.forRoot(mysqlConf.rtp_pol_web), KafkaModule, CleanModule, StrategyModule, UploadModule],
})
export class AppModule {}
