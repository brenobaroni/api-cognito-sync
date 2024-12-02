import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseMessage } from './decorators/response-message.decorator';

@Controller()
@ResponseMessage('Fetched Stats Success')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(res): string {
    return res
  }
}
