import { UploadService } from 'src/modules/upload/upload.service';
import { Injectable } from '@nestjs/common';

import { CanalMessage } from 'src/typings';

@Injectable()
export class CleanService {
    constructor(private uploadService: UploadService) {}

    dependenceCollect(data: CanalMessage) {
        // 处理逻辑
    }
}
