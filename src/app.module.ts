import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaModule } from './prisma/prisma.module';
import { EntradaModule } from './entrada/entrada.module';

@Module({
  imports: [CategoriasModule, PrismaModule, EntradaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
