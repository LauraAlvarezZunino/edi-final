import { Injectable } from '@nestjs/common';
import { EmpleadoModel } from './empleadoModel';

@Injectable()
export class EmpleadosService {
  //Defino la lista de productos
  private empleados: Array<EmpleadoModel>;

  constructor() {
    this.empleados = new Array<EmpleadoModel>();
    //Le agrego 2 empleados iniciales
    const empleado1 = {
      id: 1,
      name: 'Pedro Rodriguez',
      cellphone: '158674356',
      salary: 124440,
    };
    this.empleados.push(empleado1);

    const empleado2 = {
      id: 2,
      name: 'Juan Perez',
      cellphone: '15494384729',
      salary: 120000,
    };
    this.empleados.push(empleado2);
  }

  public getEmpleado(id: number) {
    return this.empleados.find((e) => e.id === id);
  }

  public agregarEmpleado(nuevoEmpleado: EmpleadoModel) {
    //agrego empleado a la lista
    this.empleados.push(nuevoEmpleado);
    return nuevoEmpleado;
  }

  public getEmpleados(): Array<EmpleadoModel> {
    return this.empleados;
  }

  public modificarSalary(id: number, newSalary: number) {
    let empleado = null;
    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id === id) {
        this.empleados[i].salary = newSalary;
        empleado = this.empleados[i];
      }
    }
    return empleado;
  }

  public eliminarEmpleado(id: number) {
    // Guardo el empleado que se quiere eliminar en una variable antes de eliminarlo del array para poder retornarlo
    const empleadoEliminado = this.empleados.find((e) => e.id == id);

    // Busco el indice en el array de empleados donde se encuentra el empleado que quiero eliminar
    const index = this.empleados.findIndex((e) => e.id === id);

    // Remueve el empleado del array
    this.empleados.splice(index, 1);

    // Retirno el empleado eliminado
    return empleadoEliminado;
  }
}
