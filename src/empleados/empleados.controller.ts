import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadoModel } from './empleadoModel';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  // Agregar nuevo empleado
  @Post()
  agregarEmpleado(@Body() empleado: EmpleadoModel) {
    return this.empleadosService.agregarEmpleado(empleado);
  }

  // Obtener un empleado por id
  @Get(':id')
  getEmpleado(@Param('id', ParseIntPipe) id: number) {
    return this.empleadosService.getEmpleado(id);
  }

  // Obtener todos los empleados
  @Get()
  public getEmpleados(): Array<EmpleadoModel> {
    return this.empleadosService.getEmpleados();
  }

  // Modificar salario de un empleado
  @Put(':id/salary')
  modificarSalary(
    @Param('id', ParseIntPipe) id: number,
    @Body('salary') salary: number,
  ) {
    return this.empleadosService.modificarSalary(id, salary);
  }

  // Eliminar un empleado por id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.empleadosService.eliminarEmpleado(id);
  }
}
