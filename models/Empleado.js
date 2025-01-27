import mongoose, { model, Schema } from "mongoose";
import { conexion } from "../helpers/conexion.js";

conexion();

const empleadoSchema = new Schema(
  {
    nombre: String,
    puesto: String,
    salario: Number,
  },
  {
    versionKey: false,
  }
);

const Empleado = model("Empleado", empleadoSchema);

export class EmpleadoModel {
  static async getAll() {
    try {
      return Empleado.find();
    } catch (e) {
      console.log(e);
    }
  }

  static async getOneByID(id) {
    try {
      return await Empleado.findById(id);
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(id) {
    try {
      return Empleado.deleteOne({ _id: id });
    } catch (e) {
      console.log(e);
    }
  }

  static async create(empleado) {
    const empleadoGuardar = new Empleado(empleado);
    try {
      await empleadoGuardar.save();
      return empleadoGuardar;
    } catch (e) {
      console.log(e);
    }
  }

  static async update(id, validacion) {
    try {
      return await Empleado.findOneAndUpdate({ _id: id }, { ...validacion }, { new: true });
    } catch (e) {
      console.log(e);
    }
  }
}