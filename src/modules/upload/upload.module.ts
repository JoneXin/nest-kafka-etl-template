import { StrategyModule } from './../strategy/strategy.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
    imports: [SequelizeModule.forFeature([], 'conn'), StrategyModule],
    controllers: [UploadController],
    providers: [UploadService],
    exports: [UploadService],
})
export class UploadModule {}
