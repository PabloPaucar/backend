import zod from 'zod';

const articuloSchema = zod.object({
  titulo: zod.string(),
  cuerpo: zod.string(),
  usuario: zod.string(),
});

const articuloSchemaConId = articuloSchema.extend({
  id: zod.number(),
});

const clienteSchema = zod.object({
  nombre: zod.string(),
  email: zod.string().email(),
  telefono: zod.string(),
});

const clienteSchemaConId = clienteSchema.extend({
  id: zod.number(),
});

const empleadoSchema = zod.object({
  nombre: zod.string(),
  puesto: zod.string(),
  salario: zod.number(),
});

const empleadoSchemaConId = empleadoSchema.extend({
  id: zod.number(),
});

export const validarArticulo = (articulo) => articuloSchema.safeParse(articulo);
export const validarParcial = (articulo) => articuloSchema.partial().safeParse(articulo);
export const validarArticuloConId = (articulo) => articuloSchemaConId.safeParse(articulo);

export const validarCliente = (cliente) => clienteSchema.safeParse(cliente);
export const validarParcialCliente = (cliente) => clienteSchema.partial().safeParse(cliente);
export const validarClienteConId = (cliente) => clienteSchemaConId.safeParse(cliente);

export const validarEmpleado = (empleado) => empleadoSchema.safeParse(empleado);
export const validarParcialEmpleado = (empleado) => empleadoSchema.partial().safeParse(empleado);
export const validarEmpleadoConId = (empleado) => empleadoSchemaConId.safeParse(empleado);