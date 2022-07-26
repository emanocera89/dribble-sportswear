# Dribble Sportswear

Dribble es un e-commerce de ropa deportiva, principalmente de basquetbol y urbana en general.

El sitio cuenta con:

- Filtro por categorías: Tomando las categorías de la base de datos se generan filtros de productos desde el menú. Los productos pueden tener más de una categoría asociada.
- Listado de productos: Vista general de productos con foto, precio y nombre.
- Detalle de producto: Vista con todos los detalles del producto y la opción de agregar una cantidad del mismo.
- Control de stock: Chequea que los usuarios no puedan agregar más items al carrito de los que hay disponibles.

## Instalación

1. Clonar el repositorio

2. En la raíz del proyecto ejecutar el comando 

   ```
   npm install
   ```

   Esto instala todas las dependencias del proyecto.

3. Ejecutar  

   ```
   npm start
   ```

    para correr el proyecto, que estará disponible en http://localhost:3000



## Dependencias

Uso de Bootstrap para dar estilos básicos a la app.

Uso de React Router Dom para la navegación.

Uso de React Icons para utilización de los íconos de la app.

Uso de React Loading Skeleton para mostrar un elemento que se está cargando.

Uso de www.npoint.io para alojamiento de json remoto, con el objetivo de consumirlo desde la app simulando una api.

Uso de uiball/loaders para Loaders.



## Aplicación en funcionamiento

La app se encuentra alojada en el siguiente dominio: https://dribblesports.netlify.app/


## Próximos pasos

- Se va a agregar la opción de elegir talle (será un combo con los talles disponibles para cada producto)
- El stock se mostrará solo en el detalle del producto
- Se va a agregar una página de inicio con varios carousel de productos destacados y ofertas,banners de categorías, etc
- El detalle de producto se va a mejorar, agregando más detalle a la descripción, productos sugeridos/relacionados, etc
- En el detalle de producto la idea es agregar un ícono de lupa para ver en detalle las fotos
- En el detalle de producto al hacer click en las fotos se abrirá una galería a pantalla completa
- La idea es agregar un buscador en el Navbar que filtre por nombre
- Se ajustará la vista mobile
- Se va a agregar un footer

### Autor

Emmanuel Nocera

2022 - Curso de React en CoderHouse
