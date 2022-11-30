import { StrategyService } from './../strategy/strategy.service';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { DynamicSeqlize } from 'src/utils/dynamic_sequelize';

@Injectable()
export class UploadService {
    private dynamicSeqlize: DynamicSeqlize;

    constructor(
        @InjectConnection('conn')
        private seq: Sequelize,
        private strategyService: StrategyService,
    ) {
        this.dynamicSeqlize = new DynamicSeqlize(this.seq);
    }
}
