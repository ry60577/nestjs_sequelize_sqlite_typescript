import { Module } from '@nestjs/common';
import { CbtTopologyController } from './cbtTopology.controller';

@Module({
  controllers: [CbtTopologyController],
})
export class CbtTopologyModule {}
