import mongoose, { model, Schema } from "mongoose";
import { conexion } from "../helpers/conexion.js";

conexion();

const clienteSchema = new Schema(
  {
    nombre: String,
    email: String,
    telefono: String,
  },
  {
    versionKey: false,
  }
);

const Cliente = model("Cliente", clienteSchema);

export class ClienteModel {
  static async getAll() {
    try {
      return Cliente.find();
    } catch (e) {
      console.log(e);
    }
  }

  static async getOneByID(id) {
    try {
      return await Cliente.findById(id);
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(id) {
    try {
      return Cliente.deleteOne({ _id: id });
    } catch (e) {
      console.log(e);
    }
  }

  static async create(cliente) {
    const clienteGuardar = new Cliente(cliente);
    try {
      await clienteGuardar.save();
      return clienteGuardar;
    } catch (e) {
      console.log(e);
    }
  }

  static async update(id, validacion) {
    try {
      return await Cliente.findOneAndUpdate({ _id: id }, { ...validacion }, { new: true });
    } catch (e) {
      console.log(e);
    }
  }
}