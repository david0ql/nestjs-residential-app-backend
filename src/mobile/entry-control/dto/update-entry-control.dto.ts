import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryControlDto } from './create-entry-control.dto';

export class UpdateEntryControlDto extends PartialType(CreateEntryControlDto) {}
