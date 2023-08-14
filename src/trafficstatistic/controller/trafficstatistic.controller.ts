import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTrafficstatisticDto } from '../dto/create-trafficstatistic.dto';
import { UpdateTrafficstatisticDto } from '../dto/update-trafficstatistic.dto';
import { TrafficstatisticService } from '../service/trafficstatistic.service';

@Controller('trafficstatistic')
export class TrafficstatisticController {
  constructor(
    private readonly trafficstatisticService: TrafficstatisticService,
  ) {}

  @Post()
  create(@Body() createTrafficstatisticDto: CreateTrafficstatisticDto) {
    return this.trafficstatisticService.create(createTrafficstatisticDto);
  }

  @Get()
  findAll() {
    return this.trafficstatisticService.findAll();
  }

  @Get(':serialNumber')
  findOne(@Param('serialNumber') serialNumber: string) {
    return this.trafficstatisticService.findOne(serialNumber);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrafficstatisticDto: UpdateTrafficstatisticDto,
  ) {
    return this.trafficstatisticService.update(+id, updateTrafficstatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trafficstatisticService.remove(+id);
  }
}
