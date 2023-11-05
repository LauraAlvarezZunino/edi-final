import { BadRequestException, Injectable } from '@nestjs/common';
import { EmpleadoModel } from './empleadoModel';

@Injectable()
export class EmpleadosService {
     //Defino la lista de productos
  private empleados: Array<EmpleadoModel>;

  constructor() {
    this.empleados = new Array<EmpleadoModel>;
    //Le agrego 2 empleados iniciales
    let empleado1 = {
      "id": 1,
      "name": "Pedro Escamoso",
      "cellphone": "5494384729" ,
      "salary": 124.440
    }
    this.empleados.push(empleado1);

    let empleado2 = {
        "id": 2,
        "name": "Juan Perez",
        "cellphone": "5494384729" ,
        "salary": 120.000
      }
      this.empleados.push(empleado2);

  }

public getEmpleado(id: number) {
  console.log(id);
  console.log(this.empleados);
    const empleado = this.empleados.find((e) =>{
      if( e.id === id){
        console.log(e);
      }
    }};
  console.log(empleado);
  return empleado;
  }

public agregarEmpleado (modelo: EmpleadoModel) {
    let empleado = {
       "id": modelo.id,
       "name": modelo.name,
       "cellphone": modelo.cellphone,
       "salary":modelo.salary
    }
  //   //Agrego el producto a la lista
    this.empleados.push(empleado);
    return "Empleados agregados con exito";
   }

public getEmpleados(): Array<EmpleadoModel> {
    return this.empleados;
  }

public modificarSalary(id: number, newSalary: number) {
    const empleado = this.empleados.find((e) => e.id === id);
    if (empleado) {
      empleado.salary = newSalary;
    }
  }
 // modificarEmpleado(id: string, modelo: EmpleadoModel) {

    //Aca modifico el producto.
    //Hay que completar la funcionalidad
   // return "Empleado modificado con exito"
  //}

  public eliminarEmpleado(id: string) {
    // Convierto el id que me envian a un tipo numero para poder buscar en el array de empleados
    const idNumber = Number(id);


    /**
     * [
     * {
     * id: 1,
     * name: "Lau"
     * cellphone: '2494498198'
     * salary: 500.000
     * }
     * ]
     * 
     */

    // Guardo el empleado que se quiere eliminar en una variable antes de eliminarlo del array para poder retornarlo
    const empleadoEliminado =  this.empleados.find((e) => e.id == idNumber);

    // Busco el indice en el array de empleados donde se encuentra el empleado que quiero eliminar
    const index = this.empleados.findIndex(e => e.id === idNumber); 

    // retorno un error si el empleado que se quiere eliminar no existe
    //if(!index) throw new BadRequestException(' El empleado que desea eliminar no existe');

    // Remueve el empleado del array
    this.empleados.splice(index, 1);


    // Retirno el empleado eliminado
    return empleadoEliminado;
  }
 
}
