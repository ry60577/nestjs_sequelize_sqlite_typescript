import { Test, TestingModule } from '@nestjs/testing';
import { TrafficstatisticService } from '../service/trafficstatistic.service';
import { TrafficstatisticController } from './trafficstatistic.controller';

describe('TrafficstatisticController', () => {
  let controller: TrafficstatisticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrafficstatisticController],
      providers: [TrafficstatisticService],
    }).compile();

    controller = module.get<TrafficstatisticController>(
      TrafficstatisticController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
