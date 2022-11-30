import { Injectable } from '@nestjs/common';

import { CanalMessage } from 'src/typings';

@Injectable()
export class CleanService {
    constructor() {}

    handleData(msg: CanalMessage): void {
        console.log(msg);
    }
}
