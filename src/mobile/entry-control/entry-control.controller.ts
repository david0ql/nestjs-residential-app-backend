import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntryControlService } from './entry-control.service';
import { CreateEntryControlDto } from './dto/create-entry-control.dto';
import { UpdateEntryControlDto } from './dto/update-entry-control.dto';

@Controller('entry-control')
export class EntryControlController {
  constructor(private readonly entryControlService: EntryControlService) {}

  @Post()
  create(@Body() createEntryControlDto: CreateEntryControlDto) {
    return this.entryControlService.create(createEntryControlDto);
  }

  @Get()
  findAll() {
    return this.entryControlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entryControlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntryControlDto: UpdateEntryControlDto) {
    return this.entryControlService.update(+id, updateEntryControlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entryControlService.remove(+id);
  }
}
