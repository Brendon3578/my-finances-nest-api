import { Injectable } from '@nestjs/common';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { InvalidRelationError } from '../errors/invalid-relation.error';

@Injectable()
export class EntradaService {
  constructor(private prismaService: PrismaService) {}

  async create(createEntradaDto: CreateEntradaDto) {
    const categoriaExists =
      (await this.prismaService.categoria.count({
        where: {
          id: createEntradaDto.categoria_id,
        },
      })) != 0;

    if (categoriaExists == false) {
      throw new InvalidRelationError('Categoria not found');
    }

    return this.prismaService.entrada.create({
      data: createEntradaDto,
    });
  }

  findAll() {
    return this.prismaService.entrada.findMany();
  }

  findOne(id: number) {
    return this.prismaService.entrada.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateEntradaDto: UpdateEntradaDto) {
    return this.prismaService.entrada.update({
      where: { id },
      data: updateEntradaDto,
    });
  }

  remove(id: number) {
    return this.prismaService.entrada.delete({
      where: { id },
    });
  }
}
