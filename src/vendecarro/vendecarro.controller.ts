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
  Query,
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
  findAll(
    @Query('model') model?: string,
    @Query('brand') brand?: string,
    @Query('manufactureYear') manufactureYear?: number,
    @Query('sort') sort: 'model' | 'brand' = 'model',
    @Query('order') order: 'asc' | 'desc' = 'asc'
  ) {
    return this.vendecarroService.findAll(model, brand, manufactureYear, sort, order);
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