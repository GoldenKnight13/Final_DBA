# Final_BDA
Proyecto Final de Bases de Datos Avanzadas

## Descripción
Este proyecto busca simular un sistema de información utilizada por una cadena restaurantera. En este se desarrollo un portal web desde el cual se puede consultar las diversas estadísticas de los restaurantes.

Para esto utiliza 3 servidores: servidor MySQL, backend y frontend 

El servidor backend utiliza la tecnologia de NodeJS

El servidor frontend utiliza la tecnologia de React

## Requisitos
Se necesita tener descargado NodeJS y un servidor de MySQL (en nuestro caso UniServerZ)

## Instalación

### Instalación backend y frontend
Para poder usar ambos servidores basta con descargar las carpetas en el mismo directorio.
Luego hay que entrar a cada carpeta y correr el comando `npm i` o `npm install`

### Instalación de la base de datos
Hay varias formas de descargar la base de datos:

1. Abrir el directorio donde se tiene instalado el servidor de MySQL y ejecutar `mysql -u root -p` para ingresar como usuario `root`. Luego se corre el comando `CREATE SCHEMA restaurantes;` y finalmente el comando `SOURCE [ruta del archivo restaurantes.sql];`
2. Abrir el directorio donde se tiene instalado el servidor de MySQL e iniciarlo como usuario root para crear el contenedor de la base. Matas el servidor ejecutando `exit;`. Finalmente se tiene que correr el comando `mysql -u root -p restaurantes < [ruta del archivo restaurantes.sql]` 
3. Importar la base desde `phpMyAdmin`