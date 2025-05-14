import { Module } from '@nestjs/common';
import { VendecarroService } from './vendecarro.service';
import { VendecarroController } from './vendecarro.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VendecarroController],
  providers: [VendecarroService, PrismaService],
})
export class VendecarroModule {}
