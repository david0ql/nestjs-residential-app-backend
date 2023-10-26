import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {

  findAll() {
    return `This action returns all news`;
  }

}
