import { Router } from "express";
import { EmpleadoController } from "../controllers/EmpleadoController.js";

export const EnrutadorEmpleado = (modelo) => {
  const controlador = new EmpleadoController(modelo);
  const empleadoRouter = Router();

  empleadoRouter.get('/', controlador.getAll);
  empleadoRouter.get('/:id', controlador.getOneByID);
  empleadoRouter.delete('/:id', controlador.delete);
  empleadoRouter.post('/', controlador.create);
  empleadoRouter.put('/:id', controlador.update);

  return empleadoRouter;
}