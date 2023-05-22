
## Proyect API REST con Node.JS

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

