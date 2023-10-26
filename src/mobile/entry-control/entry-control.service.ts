import { Injectable } from '@nestjs/common';
import { CreateEntryControlDto } from './dto/create-entry-control.dto';
import { UpdateEntryControlDto } from './dto/update-entry-control.dto';

@Injectable()
export class EntryControlService {
  create(createEntryControlDto: CreateEntryControlDto) {
    return 'This action adds a new entryControl';
  }

  findAll() {
    return `This action returns all entryControl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entryControl`;
  }

  update(id: number, updateEntryControlDto: UpdateEntryControlDto) {
    return `This action updates a #${id} entryControl`;
  }

  remove(id: number) {
    return `This action removes a #${id} entryControl`;
  }
}
