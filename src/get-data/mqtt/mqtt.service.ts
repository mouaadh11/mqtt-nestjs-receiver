// mqtt.service.ts

import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttService {
    private client: mqtt.MqttClient;

  constructor() {
    // Connect to the MQTT broker
    this.client = mqtt.connect('mqtt:192.168.1.40'); // Replace with your MQTT broker URL

    // Event handler for when the client is connected
    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
      // Subscribe to the topic where your ESP32 device is publishing data
      this.client.subscribe('/');
    });

    // Event handler for incoming messages
    this.client.on('message', (topic, message) => {
      // Log the received message to the console
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
      // Here you can process the message as per your application requirements
    });
  }
}
