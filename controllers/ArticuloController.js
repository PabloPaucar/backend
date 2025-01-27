export class ArticuloController {
  constructor(modelo) {
    this.modelo = modelo;
  }

  getAll = async (request, response) => {
    response.json(await this.modelo.getAll());
  };

  getOneByID = async (request, response) => {
    const id = request.params.id;
    const articulo = await this.modelo.getOneByID(id);
    if (articulo) {
      response.json(articulo);
    } else {
      response.status(404).json({ mensaje: 'Artículo no encontrado' });
    }
  };

  delete = async (request, response) => {
    const id = request.params.id;
    const resultado = await this.modelo.delete(id);
    if (resultado.deletedCount > 0) {
      response.json({ mensaje: 'Artículo eliminado' });
    } else {
      response.status(404).json({ mensaje: 'Artículo no encontrado' });
    }
  };

  create = async (request, response) => {
    const articulo = request.body;

    if (!articulo.success) {
      return response.status(400).json({ mensaje: 'Validación de datos incorrecta' });
    }

    const nuevoArticulo = await this.modelo.create(articulo.data);
    response.status(201).json(nuevoArticulo);
  };

  update = async (request, response) => {
    const id = request.params.id;
    const articuloValidado = validarParcial(request.body);

    if (!articuloValidado.success) {
      return response.status(400).json({ mensaje: 'Validación de datos incorrecta' });
    }

    const articuloActualizado = await this.modelo.update(id, articuloValidado.data);
    if (articuloActualizado) {
      response.json(articuloActualizado);
    } else {
      response.status(404).json({ mensaje: 'Artículo no encontrado' });
    }
  };
}