import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosController } from './empleados/empleados.controller';
import { EmpleadosService } from './empleados/empleados.service';

@Module({
  imports: [],
  controllers: [AppController, EmpleadosController],
  providers: [AppService, EmpleadosService],
})
export class AppModule {}
