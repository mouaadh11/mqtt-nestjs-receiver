// your-module.module.ts

import { Module } from '@nestjs/common';
import { MqttService } from './mqtt/mqtt.service';

@Module({
  providers: [MqttService], // Provide the MQTT service
})
export class GetDataModule {}

