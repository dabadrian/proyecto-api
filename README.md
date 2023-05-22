
# Proyecto API REST con Node.JS

Este es el proyecto API REST con node.js  
Proyecto deployado en render.com: https://proyecto-api-test.onrender.com  

Lista de APIs en render.com:  
Listar Usuarios: GET https://proyecto-api-test.onrender.com/usuarios/  
Listar Usuario: GET https://proyecto-api-test.onrender.com/usuarios/5  
Actualizar Usuario (req. json en body): PUT https://proyecto-api-test.onrender.com/usuarios/5  
Crear Usuario POST (req. json en body) https://proyecto-api-test.onrender.com/usuarios/  
Eliminar Usuario: DELETE https://proyecto-api-test.onrender.com/usuarios/10  
Promedio Edades Usuarios: GET https://proyecto-api-test.onrender.com/promedio-edad//  
Estado Proyecto: https://proyecto-api-test.onrender.com/estado/  

## Autores

- [@dabadrian](https://github.com/dabadrian/)


## Despliegue

En una instancia PostgreSQL crear el usuario para conectar.

```bash
  postgres=# CREATE USER dbadmin PASSWORD 'dbadmin';
```
Crear la base de datos del proyecto:

```bash
  postgres=# CREATE DATABASE PROYECTO_API;
```
Permitir permisos conexión al usuario creado:

```bash
  postgres=# GRANT ALL ON SCHEMA PROYECTO_API TO dbadmin;
```

En el editor SQL de PostgreSQL, crear la tabla USUARIO en la BdD PROYECTO_API

```bash
  CREATE TABLE USUARIO (
    id_usuario SERIAL PRIMARY KEY,
    cedula_identidad VARCHAR(20) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    primer_apellido VARCHAR(50) NOT NULL,
    segundo_apellido VARCHAR(50),
    fecha_nacimiento DATE
  );
```

En el editor SQL de PostgreSQL, insertar valores a la tabla USUARIO de la BdD PROYECTO_API

```bash
  INSERT INTO USUARIO (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento) VALUES
('1234567890', 'Juan', 'García', 'López', '1990-01-01'),
('9876543210', 'María', 'Pérez', 'Gutiérrez', '1992-05-10'),
('4567890123', 'Carlos', 'Fernández', 'Ramírez', '1985-09-15'),
('3210987654', 'Laura', 'Rodríguez', 'Chávez', '1998-07-20'),
('2345678901', 'Diego', 'Vargas', 'Mendoza', '1991-03-05'),
('7654321098', 'Ana', 'López', 'Gómez', '1988-12-12'),
('6789012345', 'Pedro', 'Sánchez', 'Lima', '1994-11-08'),
('5432109876', 'Carolina', 'Herrera', 'Ortega', '1997-06-25'),
('8765432109', 'Luis', 'Mendoza', 'Cabrera', '1993-04-18'),
('9876543219', 'Gabriela', 'Gutiérrez', 'Soto', '1996-02-28');
```

Clonar el proyecto (https://github.com/dabadrian/proyecto-api):

```bash
  https://github.com/dabadrian/proyecto-api.git
```
En el directorio donde se clonó lanzar el proyecto Node.JS
```bash
  node index.js
```

## Referencia API 

#### Mostrar Usuarios

```http
  GET /usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Mostrar usuario

```http
  GET /usuarios/${id_usuario}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id_usuario`      | `int` | **Required**. Id del Usuario a mostrar |

#### Crear usuario

```http
  POST /usuarios/
```
Json a enviar:
```json
{
   "cedula_identidad":"5432109876",
   "nombre":"Carolina",
   "primer_apellido":"Herrera",
   "segundo_apellido":"Choque",
   "fecha_nacimiento":"1997-06-25T04:00:00.000Z"
}
```

#### Actualizar usuario

```http
  PUT /usuarios/${id_usuario}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id_usuario`      | `int` | **Required**. Id del Usuario a actualizar |

Json a enviar:
```json
{
   "cedula_identidad":"5432109876",
   "nombre":"Carolina",
   "primer_apellido":"Herrera",
   "segundo_apellido":"Choque",
   "fecha_nacimiento":"1997-06-25T04:00:00.000Z"
}
```

#### Eliminar usuario

```http
  DELETE /usuarios/${id_usuario}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id_usuario`      | `int` | **Required**. Id del Usuario a eliminar |

#### Información del Proyecto

```http
  GET /estado
```
