import { UploadModule } from './../upload/upload.module';
import { Module } from '@nestjs/common';
import { CleanController } from './clean.controller';
import { CleanService } from './clean.service';

@Module({
    imports: [UploadModule],
    controllers: [CleanController],
    providers: [CleanService],
    exports: [CleanService],
})
export class CleanModule {}
