import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendecarroModule } from './vendecarro/vendecarro.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, VendecarroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
