import { Injectable } from '@nestjs/common';
import { CreateVendecarroDto } from './dto/create-vendecarro.dto';
import { UpdateVendecarroDto } from './dto/update-vendecarro.dto';
import { Vendecarro } from './entities/vendecarro.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VendecarroService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(vendecarro: any): Vendecarro {
    return {
      id: vendecarro.id,
      manufactureYear: vendecarro.manufactureYear,
      horsepower: vendecarro.horsepower,
      brand: vendecarro.brand,
      model: vendecarro.model,
      engine: vendecarro.engine,
    };
  }

  async create(createVendecarroDto: CreateVendecarroDto):Promise<Vendecarro>{
    return await this.prisma.vendeCarro.create({
      data: this.mapToEntity(createVendecarroDto)
    })
  }

  async findAll(): Promise<Vendecarro[]>  {
    const vendecarro = await this.prisma.vendeCarro.findMany();
    return vendecarro.map(vendecarro => this.mapToEntity(vendecarro));
  }

  async findOne(id: number): Promise<Vendecarro> {
    const vendecarro = await this.prisma.vendeCarro.findUnique({
      where: { id },
    });
    return this.mapToEntity(vendecarro);
  }

  async update(id: number, updateVendecarroDto: UpdateVendecarroDto): Promise<Vendecarro> {
    const updatedVendecarro = await this.prisma.vendeCarro.update({
      where: { id },
      data: updateVendecarroDto,
    });
    return this.mapToEntity(updatedVendecarro);
  }

  async remove(id: number): Promise<Vendecarro> {
    const deletedVendecarro = await this.prisma.vendeCarro.delete({
      where: { id },
    });
    return this.mapToEntity(deletedVendecarro);
  }
}
