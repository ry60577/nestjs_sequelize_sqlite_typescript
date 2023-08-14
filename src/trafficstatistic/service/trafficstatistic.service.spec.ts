import { Test, TestingModule } from '@nestjs/testing';
import { TrafficstatisticService } from './trafficstatistic.service';

describe('TrafficstatisticService', () => {
  let service: TrafficstatisticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrafficstatisticService],
    }).compile();

    service = module.get<TrafficstatisticService>(TrafficstatisticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
