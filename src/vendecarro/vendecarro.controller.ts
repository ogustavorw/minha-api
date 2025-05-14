import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { VendecarroService } from './vendecarro.service';
import { CreateVendecarroDto } from './dto/create-vendecarro.dto';
import { UpdateVendecarroDto } from './dto/update-vendecarro.dto';

@Controller('vendecarro')
export class VendecarroController {
  constructor(private readonly vendecarroService: VendecarroService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createVendecarroDto: CreateVendecarroDto) {
    return this.vendecarroService.create(createVendecarroDto);
  }

  @Get()
  findAll() {
    return this.vendecarroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendecarroService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVendecarroDto: UpdateVendecarroDto,
  ) {
    return this.vendecarroService.update(+id, updateVendecarroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendecarroService.remove(+id);
  }
}