import express from "express";
import cors from "cors";
import { EnrutadorArticulo } from "./routes/articulosRoutes.js";
import { ArticuloModel } from "./models/Articulo.js";
import { EnrutadorCliente } from "./routes/clientesRoutes.js";
import { ClienteModel } from "./models/Cliente.js";
import { EnrutadorEmpleado } from "./routes/empleadosRoutes.js";
import { EmpleadoModel } from "./models/Empleado.js";

const app = express();

// CORS Configuration
app.use(cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
const PORT = 3030;

app.use('/api/articulos', EnrutadorArticulo(ArticuloModel));
app.use('/api/clientes', EnrutadorCliente(ClienteModel));
app.use('/api/empleados', EnrutadorEmpleado(EmpleadoModel));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});