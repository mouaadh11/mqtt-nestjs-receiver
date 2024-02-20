// your-controller.controller.ts

import { Controller } from '@nestjs/common';
import { MqttService } from './mqtt/mqtt.service';

@Controller('your-controller')
export class YourController {
  constructor(private readonly mqttService: MqttService) {}
}
