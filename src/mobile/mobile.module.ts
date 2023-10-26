import { Module } from '@nestjs/common';

import { EntrepreneurshipsModule } from './entrepreneurships/entrepreneurships.module';
import { EntryControlModule } from './entry-control/entry-control.module';
import { ProfileModule } from './profile/profile.module';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';
import { PqrModule } from './pqr/pqr.module';

@Module({
  imports: [
    EntrepreneurshipsModule,
    EntryControlModule,
    ProfileModule,
    AuthModule,
    NewsModule,
    PqrModule,
  ],
})

export class MobileModule {}
