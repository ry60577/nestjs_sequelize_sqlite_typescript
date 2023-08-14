import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { CreateStatisticDto } from '../dto/create-statistic.dto';
import { UpdateStatisticDto } from '../dto/update-statistic.dto';
import { Statistic } from '../statistic.entity';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectConnection('owgwConnection') // 指定連線名稱
    @InjectModel(Statistic)
    private readonly statisticModel: typeof Statistic,
  ) {}

  create(createStatisticDto: CreateStatisticDto) {
    return 'This action adds a new statistic';
  }

  findAll() {
    return `This action returns all statistics`;
  }

  async findOne(serialNumber: string): Promise<Statistic> {
    return await this.statisticModel.findOne({
      where: {
        SerialNumber: serialNumber,
      },
    });
  }

  update(id: number, updateStatisticDto: UpdateStatisticDto) {
    return `This action updates a #${id} statistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} statistic`;
  }
}
