import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { PqrService } from './pqr.service';
import { fileFilter, fileNamer } from './helpers';
import { Response } from 'express';

@Controller('pqr')
export class PqrController {
  constructor(private readonly pqrService: PqrService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './static/pqr',
        filename: fileNamer,
      }),
    }),
  )
  create(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    if (!file)
      throw new BadRequestException('Make sure that the file is an image');

    const secureUrl = `${file.filename}`;
    return {
      file: secureUrl,
    };
  }

  @Get(':imageName')
  find(@Res() res: Response, @Param('imageName') imageName: string) {
    const path = this.pqrService.getStaticProductImage(imageName);
    res.sendFile(path);
  }
}
