import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CbtTopologyModule } from './cbtTopology/cbtTopology.module';
import { Device } from './devices/device.entity';
import { Statistic } from './statistics/statistic.entity';
import { StatisticsModule } from './statistics/statistics.module';
import { TrafficstatisticModule } from './trafficstatistic/trafficstatistic.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './database/testDB',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forRoot({
      name: 'owgwConnection', // 第二個DB要給予名稱
      dialect: 'sqlite',
      storage: './database/owgw-data/persist/devices.db',
      models: [Device, Statistic],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    StatisticsModule,
    TrafficstatisticModule,
    CbtTopologyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
