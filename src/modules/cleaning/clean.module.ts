import { Module } from '@nestjs/common';
import { CleanController } from './clean.controller';
import { CleanService } from './clean.service';

@Module({
    imports: [],
    controllers: [CleanController],
    providers: [CleanService],
    exports: [CleanService],
})
export class CleanModule {}
