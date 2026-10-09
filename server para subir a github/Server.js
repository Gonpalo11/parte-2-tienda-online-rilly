const express = require("express");

const app = express();

app.use(express.static("public"));


const productos = [

    {
        id: 3,
        nombre: "Mouse inalámbrico",
        precio: 35000,
        imagen: "/imagenes/mouse.jpg"
    }
];


app.get("/productos", (solicitud, respuesta) => {
    respuesta.json(productos);
});

app.get("/productos/:id", (solicitud, respuesta) => {

    const id = Number(solicitud.params.id);

    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return respuesta.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    respuesta.json(producto);
});

app.use((solicitud, respuesta, next) => {
    respuesta.status(404).send('Recurso no encontrado');
   });


app.listen(4000, () => {
    console.log("Servidor corriendo en http://localhost:4000");
});