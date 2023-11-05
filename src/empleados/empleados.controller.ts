import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadoModel } from './empleadoModel';

@Controller('empleados')
export class EmpleadosController {

    constructor(private readonly empleadosService: EmpleadosService) {}

    @Post()
    agregarEmpleado(@Body() empleado: EmpleadoModel) {
        return this.empleadosService.agregarEmpleado(empleado) ;
    }

 //obtener info 1 empleado
    @Get(':id')
    getEmpleado(@Param('id', ParseIntPipe) id: number) {
        return this.empleadosService.getEmpleado(id);
    }

    @Get()
    public getEmpleados():Array<EmpleadoModel> {
        return  this.empleadosService.getEmpleados();
    }



    @Put(':id/salary')
    modificarSalary(@Param('id', ParseIntPipe) id: number, @Body('salary') salary: number) {
       return this.empleadosService.modificarSalary(id, salary);
    }

    
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return this.empleadosService.eliminarEmpleado(id);
    }








}
