module.exports = (sequelize, type) => {
    return sequelize.define('posts', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Titulo: type.STRING,
        Contenido: type.STRING,
        Imagen: type.STRING,
        Categoria: type.STRING,
        Fecha_de_creacion: type.STRING
    })
}