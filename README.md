# Backend API - Sistema de Gestión

Una API REST desarrollada con Node.js, Express.js y MongoDB para gestionar artículos, clientes y empleados.

## 🚀 Características

- **API RESTful** con endpoints para CRUD operations
- **Validación de datos** usando Zod
- **Base de datos MongoDB** con Mongoose
- **Arquitectura MVC** (Model-View-Controller)
- **CORS configurado** para frontend en localhost:5174

## 📋 Entidades

### Artículos
- `titulo`: String
- `cuerpo`: String  
- `usuario`: String

### Clientes
- `nombre`: String
- `email`: String (con validación de email)
- `telefono`: String

### Empleados
- `nombre`: String
- `puesto`: String
- `salario`: Number

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Zod** - Validación de esquemas
- **CORS** - Cross-Origin Resource Sharing

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/PabloPaucar/backend.git
cd backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Asegúrate de tener MongoDB ejecutándose en tu sistema local en el puerto 27017.

4. Inicia el servidor:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3030`

## 🔗 Endpoints

### Artículos
- `GET /api/articulos` - Obtener todos los artículos
- `GET /api/articulos/:id` - Obtener artículo por ID
- `POST /api/articulos` - Crear nuevo artículo
- `PUT /api/articulos/:id` - Actualizar artículo
- `DELETE /api/articulos/:id` - Eliminar artículo

### Clientes
- `GET /api/clientes` - Obtener todos los clientes
- `GET /api/clientes/:id` - Obtener cliente por ID
- `POST /api/clientes` - Crear nuevo cliente
- `PUT /api/clientes/:id` - Actualizar cliente
- `DELETE /api/clientes/:id` - Eliminar cliente

### Empleados
- `GET /api/empleados` - Obtener todos los empleados
- `GET /api/empleados/:id` - Obtener empleado por ID
- `POST /api/empleados` - Crear nuevo empleado
- `PUT /api/empleados/:id` - Actualizar empleado
- `DELETE /api/empleados/:id` - Eliminar empleado

## 📁 Estructura del Proyecto

```
backend/
├── controllers/          # Controladores de la aplicación
│   ├── ArticuloController.js
│   ├── ClienteController.js
│   └── EmpleadoController.js
├── models/               # Modelos de datos
│   ├── Articulo.js
│   ├── Cliente.js
│   └── Empleado.js
├── routes/               # Definición de rutas
│   ├── articulosRoutes.js
│   ├── clientesRoutes.js
│   └── empleadosRoutes.js
├── helpers/              # Utilidades y helpers
│   ├── conexion.js       # Conexión a MongoDB
│   └── zod.js           # Esquemas de validación
└── index.js             # Punto de entrada de la aplicación
```

## 🔧 Configuración

### Base de Datos
La aplicación se conecta a MongoDB en `mongodb://localhost:27017/`. Puedes modificar la cadena de conexión en `helpers/conexion.js`.

### CORS
Configurado para permitir requests desde `http://localhost:5174`. Modifica la configuración en `index.js` si necesitas cambiar el origen.

## 📝 Ejemplos de Uso

### Crear un artículo
```bash
curl -X POST http://localhost:3030/api/articulos \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Mi primer artículo",
    "cuerpo": "Contenido del artículo...",
    "usuario": "pablo"
  }'
```

### Crear un cliente
```bash
curl -X POST http://localhost:3030/api/clientes \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@email.com",
    "telefono": "+1234567890"
  }'
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Pablo Paucar** - [@PabloPaucar](https://github.com/PabloPaucar)