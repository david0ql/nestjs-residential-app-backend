import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrepreneurshipsService } from './entrepreneurships.service';
import { CreateEntrepreneurshipDto } from './dto/create-entrepreneurship.dto';
import { UpdateEntrepreneurshipDto } from './dto/update-entrepreneurship.dto';

@Controller('entrepreneurships')
export class EntrepreneurshipsController {
  constructor(private readonly entrepreneurshipsService: EntrepreneurshipsService) {}

  @Post()
  create(@Body() createEntrepreneurshipDto: CreateEntrepreneurshipDto) {
    return this.entrepreneurshipsService.create(createEntrepreneurshipDto);
  }

  @Get()
  findAll() {
    return this.entrepreneurshipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrepreneurshipsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrepreneurshipDto: UpdateEntrepreneurshipDto) {
    return this.entrepreneurshipsService.update(+id, updateEntrepreneurshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrepreneurshipsService.remove(+id);
  }
}
