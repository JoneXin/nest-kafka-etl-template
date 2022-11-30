import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import { CanalMessage } from 'src/typings';

@Controller()
export class KafkaController implements OnModuleInit {
    constructor(
        private readonly kafkaService: KafkaService,
        @Inject('DEMO_SERVICE') private readonly client: ClientKafka,
    ) {}

    onModuleInit() {
        this.client.subscribeToResponseOf('example');
    }

    @MessagePattern('example')
    handleCanalData(@Payload() msg: CanalMessage) {
        this.kafkaService.handleData(msg);
    }
}
