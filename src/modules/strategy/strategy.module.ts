import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StrategyController } from './strategy.controller';
import { StrategyService } from './strategy.service';

@Module({
    imports: [SequelizeModule.forFeature([], 'conn')],
    controllers: [StrategyController],
    providers: [StrategyService],
    exports: [StrategyService],
})
export class StrategyModule {}
