import mongoose from "mongoose";

export const conexion = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/");
        console.log("Conectado correctamente a la base de datos");
    } catch (e) {
        console.log("Error al conectar a la base de datos:", e);
    }
};