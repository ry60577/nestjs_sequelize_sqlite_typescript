import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Device } from '../device.entity';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device)
    private readonly deviceModel: typeof Device,
  ) {}

  create(createDeviceDto: CreateDeviceDto) {
    return 'This action adds a new device';
  }

  async findAll(): Promise<Device[]> {
    return await this.deviceModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  async findOneBySerialNumber(serialNumber: string): Promise<Device> {
    return await this.deviceModel.findOne({
      where: {
        serialNumber,
      },
    });
  }

  async findByModelName(name: string): Promise<Device[]> {
    return await this.deviceModel.findAll({
      where: {
        Compatible: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
