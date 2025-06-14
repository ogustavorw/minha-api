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
        data: {
              manufactureYear: createVendecarroDto.manufactureYear, // Ano de fabricação do carro
              horsepower: createVendecarroDto.horsepower, // potência do motor em cavalos (hp)
              brand: createVendecarroDto.brand, // Marca do carro
              model: createVendecarroDto.model, // Nome/Modelo do carro
              engine: createVendecarroDto.engine // Motor 2.0 turbo
        }
      })
    }

async findAll(
    model?: string,
    brand?: string,
    manufactureYear?: number,
    sort: 'model' | 'brand' = 'model',
    order: 'asc' | 'desc' = 'asc'
  ): Promise<Vendecarro[]> {
    const where: any = {};

    if (model) {
      where.model = {
        contains: model,
        mode: 'insensitive',
      };
    }

    if (brand) {
      where.brand = {
        equals: brand,
        mode: 'insensitive',
      };
    }

    if (manufactureYear !== undefined) {
      where.manufactureYear = {
        equals: Number(manufactureYear),
      };
    }

    const cars = await this.prisma.vendeCarro.findMany({
      where,
      orderBy: {
        [sort]: order,
      },
    });

    return cars.map(vendecarro => this.mapToEntity(vendecarro));
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
