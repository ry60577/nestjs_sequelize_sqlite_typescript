import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TrafficstatisticController } from './controller/trafficstatistic.controller';
import { TrafficstatisticService } from './service/trafficstatistic.service';
import { Trafficstatistic } from './trafficstatistic.entity';

@Module({
  imports: [SequelizeModule.forFeature([Trafficstatistic], 'owgwConnection')],
  controllers: [TrafficstatisticController],
  providers: [TrafficstatisticService],
})
export class TrafficstatisticModule {}
