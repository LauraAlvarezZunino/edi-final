import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadoModel } from './empleadoModel';

@Controller('empleados')
export class EmpleadosController {

    constructor(private readonly empleadosService: EmpleadosService) {}

    @Post()
    agregarEmpleado(@Body() empleado: EmpleadoModel) {
      this.empleadosService.agregarEmpleado (empleado) ;
    }

 //obtener info 1 empleado
 @Get(':id')
 getEmpleado(@Param('id') id: number) {
    
   return this.empleadosService.getEmpleado(id);
 }

    @Get()
    public getEmpleados():Array<EmpleadoModel> {
      return  this.empleadosService.getEmpleados();
    }



  @Put(':id/salary')
  modificarSalary(@Param('id') id: number, @Body('salary') salary: number) {
    this.empleadosService.modificarSalary(id, salary);
  }

    
    @Delete(':id')
     remove(@Param('id') id: string) {
    console.log(id);
    return this.empleadosService.eliminarEmpleado(id);
  }








}
