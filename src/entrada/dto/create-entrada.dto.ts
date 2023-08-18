import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsString,
  MaxLength,
  IsNotEmpty,
  Min,
  IsInt,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateEntradaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  pago: boolean;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  tipo: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  data: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Min(1)
  @IsInt()
  categoria_id: number;
}
