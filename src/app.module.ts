import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetDataModule } from './get-data/get-data.module';

@Module({
  imports: [GetDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
