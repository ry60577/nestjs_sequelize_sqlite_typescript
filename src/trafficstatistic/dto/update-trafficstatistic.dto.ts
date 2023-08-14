import { PartialType } from '@nestjs/mapped-types';
import { CreateTrafficstatisticDto } from './create-trafficstatistic.dto';

export class UpdateTrafficstatisticDto extends PartialType(CreateTrafficstatisticDto) {}
