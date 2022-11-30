import { CleanModule } from './../cleaning/clean.module';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { kafkaOptions } from 'src/config/sys.config';
import { Flaw } from 'src/entity/rtp_pol_web/flaw.entity';
import { KafkaController } from './kafka.controller';
import { KafkaService } from './kafka.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'DEMO_SERVICE',
                transport: Transport.KAFKA,
                options: kafkaOptions,
            },
        ]),
        CleanModule,
    ],
    controllers: [KafkaController],
    providers: [KafkaService],
    exports: [KafkaService],
})
export class KafkaModule {}
