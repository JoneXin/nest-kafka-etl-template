import { CleanService } from './../cleaning/clean.service';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CanalMessage } from 'src/typings';

@Injectable()
export class KafkaService {
    constructor(@Inject('DEMO_SERVICE') private readonly client: ClientKafka, private cleanService: CleanService) {}

    handleData(msg: CanalMessage): void {
        this.cleanService.dependenceCollect(msg);
    }
}
