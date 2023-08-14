import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Response,
} from '@nestjs/common';
import { Eap } from './eap';

@Controller('/api/v1/cbtTopology')
export class CbtTopologyController {
  @Get(':type?')
  async findOne(
    @Param('type') type: string,
    @Query('macAddr') macAddr: string,
    @Response() res,
  ) {
    console.log({ type: type, macAddr: macAddr });
    let Answer: any;
    switch (type) {
      case 'eap':
        Answer = await Eap(macAddr);
        break;
    }
    return res.status(HttpStatus.OK).json(Answer);
  }
}
