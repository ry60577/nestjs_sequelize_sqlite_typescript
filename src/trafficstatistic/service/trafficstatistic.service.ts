import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { QueryTypes } from 'sequelize';
import { CreateTrafficstatisticDto } from '../dto/create-trafficstatistic.dto';
import { UpdateTrafficstatisticDto } from '../dto/update-trafficstatistic.dto';
import { Trafficstatistic } from '../trafficstatistic.entity';

@Injectable()
export class TrafficstatisticService {
  constructor(
    @InjectConnection('owgwConnection')
    @InjectModel(Trafficstatistic)
    private readonly trafficstatisticModel: typeof Trafficstatistic,
  ) {}

  create(createTrafficstatisticDto: CreateTrafficstatisticDto) {
    return 'This action adds a new trafficstatistic';
  }

  findAll() {
    return `This action returns all trafficstatistic`;
  }

  async findByMacAddrAndDay(macAddr: string): Promise<Trafficstatistic[]> {
    return await this.trafficstatisticModel.sequelize.query(
      "SELECT * FROM TrafficStatistic WHERE srcMac = :macAddr AND Type = 'day'",
      {
        replacements: { macAddr: macAddr },
        type: QueryTypes.SELECT,
      },
    );
    // return await this.trafficstatisticModel.findAll({
    //   where: {
    //     srcMac: serialNumber,
    //     Type: 'day',
    //   },
    // });
  }

  findOne(serialNumber: string) {
    return this.trafficstatisticModel.findOne({
      where: {
        srcMac: serialNumber,
        Type: 'day',
      },
    });
  }

  update(id: number, updateTrafficstatisticDto: UpdateTrafficstatisticDto) {
    return `This action updates a #${id} trafficstatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} trafficstatistic`;
  }
}
