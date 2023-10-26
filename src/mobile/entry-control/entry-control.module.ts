import { Module } from '@nestjs/common';
import { EntryControlService } from './entry-control.service';
import { EntryControlController } from './entry-control.controller';

@Module({
  controllers: [EntryControlController],
  providers: [EntryControlService],
})
export class EntryControlModule {}
