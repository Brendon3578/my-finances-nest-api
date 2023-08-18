import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('entradas')
export class EntradaController {
  constructor(private readonly entradaService: EntradaService) {}

  @ApiBody({
    type: CreateEntradaDto,
  })
  @Post()
  create(@Body() createEntradaDto: CreateEntradaDto) {
    return this.entradaService.create(createEntradaDto);
  }

  @Get()
  findAll() {
    return this.entradaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entradaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntradaDto: UpdateEntradaDto) {
    return this.entradaService.update(+id, updateEntradaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entradaService.remove(+id);
  }
}
