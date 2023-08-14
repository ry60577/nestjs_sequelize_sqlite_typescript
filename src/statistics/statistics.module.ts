import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatisticsController } from './controller/statistics.controller';
import { StatisticsService } from './service/statistics.service';
import { Statistic } from './statistic.entity';

@Module({
  imports: [SequelizeModule.forFeature([Statistic], 'owgwConnection')],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
