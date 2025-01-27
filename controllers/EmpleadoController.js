import { validarEmpleado, validarParcialEmpleado } from "../helpers/zod.js";

export class EmpleadoController {
  constructor(modelo) {
    this.modelo = modelo;
  }

  getAll = async (request, response) => {
    response.json(await this.modelo.getAll());
  };

  getOneByID = async (request, response) => {
    const id = request.params.id;
    const empleado = await this.modelo.getOneByID(id);
    if (empleado) {
      response.json(empleado);
    } else {
      response.status(400).end();
    }
  };

  delete = async (request, response) => {
    const id = request.params.id;
    const empleadosDevolver = await this.modelo.delete(id);
    if (empleadosDevolver) {
      response.json(empleadosDevolver);
    } else {
      response.status(400).end();
    }
  };

  create = async (request, response) => {
    const empleado = validarEmpleado(request.body);

    if (!empleado.success) {
      return response.status(400).json('Validación de datos es Incorrecta');
    }

    const nuevoEmpleado = await this.modelo.create(empleado.data);
    response.json(nuevoEmpleado);
  };

  update = async (request, response) => {
    const id = request.params.id;
    const empleadoValidado = validarParcialEmpleado(request.body);

    if (!empleadoValidado.success) {
      return response.status(400).json('Validación de datos es Incorrecta');
    }

    const nuevoEmpleado = await this.modelo.update(id, empleadoValidado.data);
    response.json(nuevoEmpleado);
  };
}