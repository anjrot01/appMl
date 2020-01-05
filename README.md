# Aplicación de práctica con el buscador de Mercado Libre

## Node - Express - React

### Modo de instalación y uso

- Clonar o bajar las dos carpetas del repositorio

### /Servidor

```sh
    $ cd servidor
```

- Instalar las dependencias.

```sh
    $ npm install
```

- Levantar el servidor (si no disponen de un archivo .env el servidor automáticamente se ejecutará en el puerto 5000)

```sh
    $ npm start
```

**Con el servidor ejecuntandose se pueden monitorizar los endpoints con las siguienes rutas:**

- http://localhost:5000/api/items?q=:query
- http://localhost:5000/api/items/:id
- http://localhost:5000/category/:id_category

### /cliente

```ssh
    $ cd cliente
```

- Instalar las dependencias.

```sh
    $ npm install
```

- Levantar el servidor de React (default port: 3000)

**La aplicación realiza las siguientes funciones**

- "/", solo aparece el buscador
- Al ejecutar la busqueda la Url cambia a "/items?search=:query" y se muestran 4 resultados traídos desde la Api search de ML.
- En la pantalla de Resultados al presionar en el titulo de la publicación o en la imagen la Url va hacia "/items/:id", mostrando la página del producto elegido.
- Si se tiene un id de producto, se podrá buscar directamente con la ruta "/items/:id"

El endpoint base para las consultas en ML que se usa es "https://api.mercadolibre.com" y cuando se necesita el \$site_id se usa "MLC" correspondiente a ML Chile.

### Entorno

**Backend**

- Node v12.13.0
- Express v4.17.1

**Frontend**

- React v16.12.0
- Javascript
- HTML 5
- CSS 3

Antonio Rodríguez
