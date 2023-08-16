import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Global() // cria uma instância global para a aplicação
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
