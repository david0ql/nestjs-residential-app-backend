import { Injectable } from '@nestjs/common';
import { CreateEntrepreneurshipDto } from './dto/create-entrepreneurship.dto';
import { UpdateEntrepreneurshipDto } from './dto/update-entrepreneurship.dto';

@Injectable()
export class EntrepreneurshipsService {
  create(createEntrepreneurshipDto: CreateEntrepreneurshipDto) {
    return 'This action adds a new entrepreneurship';
  }

  findAll() {
    return `This action returns all entrepreneurships`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrepreneurship`;
  }

  update(id: number, updateEntrepreneurshipDto: UpdateEntrepreneurshipDto) {
    return `This action updates a #${id} entrepreneurship`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrepreneurship`;
  }
}
