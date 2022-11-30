import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { DynamicSeqlize } from 'src/utils/dynamic_sequelize';

@Injectable()
export class StrategyService {
    private dynamicSeqlize: DynamicSeqlize;

    constructor(
        @InjectConnection('conn')
        private seq: Sequelize,
    ) {
        this.dynamicSeqlize = new DynamicSeqlize(this.seq);
    }
}
