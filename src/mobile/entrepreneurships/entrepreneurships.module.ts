import { Module } from '@nestjs/common';
import { EntrepreneurshipsService } from './entrepreneurships.service';
import { EntrepreneurshipsController } from './entrepreneurships.controller';

@Module({
  controllers: [EntrepreneurshipsController],
  providers: [EntrepreneurshipsService],
})
export class EntrepreneurshipsModule {}
