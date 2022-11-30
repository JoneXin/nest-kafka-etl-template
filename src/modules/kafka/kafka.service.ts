import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Flaw } from 'src/entity/rtp_pol_web/flaw.entity';
import { DynamicSeqlize } from 'src/utils/dynamic_sequelize';
import { CanalMessage } from 'src/typings';

@Injectable()
export class KafkaService {
    private dynamicSeqlize: DynamicSeqlize;
    constructor(
        @InjectModel(Flaw, 'rtp_pol_web')
        private flawModel: typeof Flaw,
        @InjectConnection('rtp_pol_web')
        private seq: Sequelize,
        @Inject('DEMO_SERVICE') private readonly client: ClientKafka,
    ) {
        this.dynamicSeqlize = new DynamicSeqlize(this.seq);
        this.test();
    }

    handleData(msg: CanalMessage): void {
        console.log(msg);
    }

    async test() {
        setTimeout(async () => {
            const res = await this.flawModel.findOne({ where: { uid: 1 } });
            console.log(res, '---------');
        }, 2000);

        setTimeout(async () => {
            const res = await this.seq.query('select * from test.user', { type: 'SELECT' });
            console.log(res, '---------');
        }, 2000);

        setTimeout(async () => {
            const testData = [
                { uid: 1, db_name: 'a', current: 0 },
                { uid: 2, db_name: 'ccb', current: 1 },
            ];
            const res = await this.dynamicSeqlize.upload(testData, {
                database: 'test',
                table: 'strategy',
                updateOnDuplicateKeys: true,
            });
        }, 2000);
    }
}
