import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DevicesController } from './controller/devices.controller';
import { Device } from './device.entity';
import { DevicesService } from './service/devices.service';

@Module({
  imports: [SequelizeModule.forFeature([Device])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
