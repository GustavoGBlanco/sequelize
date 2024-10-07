
# Microservicio con Sequelize y PostgreSQL

Este proyecto es una aplicación basada en microservicios construida utilizando Node.js, Express, Sequelize ORM y PostgreSQL. Sigue una arquitectura limpia con módulos bien organizados, incluyendo controladores, servicios, modelos y rutas. El proyecto está containerizado utilizando Docker para simplificar la configuración y despliegue.

## Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Configuración](#configuración)
4. [Ejecución del Proyecto](#ejecución-del-proyecto)
5. [Endpoints](#endpoints)
6. [Variables de Entorno](#variables-de-entorno)
7. [Scripts del package.json](#scripts-del-package-json)
8. [Patrones de Diseño y Buenas Prácticas](#patrones-de-diseño-y-buenas-prácticas)
9. [Solución de Problemas](#solución-de-problemas)
10. [Contacto](#contacto)

---

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- Docker
- Node.js (para ejecución local)
- PostgreSQL (solo para ejecución local, opcional)

## Estructura del Proyecto

```bash
project-root/
├── docker-compose.yml
├── .env
├── Dockerfile
├── package.json
├── package-lock.json
├── config/
│   └── config.js
├── migrations/
├── seeders/
└── src/
    ├── app.js
    ├── controllers/
    │   └── userController.js
    ├── models/
    │   ├── index.js
    │   └── user.js
    ├── routes/
    │   └── userRoutes.js
    └── services/
        └── userService.js
```

## Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/GustavoGBlanco/sequelize.git
cd sequelize
```

### 2. Variables de Entorno

Copia el archivo `.env.sample` a `.env` y ajusta las variables según sea necesario.

```bash
cp .env.sample .env
```

El archivo `.env` debe contener las siguientes variables:

```env
DB_HOST=db                # Host de PostgreSQL (para Docker)
DB_USER=admin             # Usuario de PostgreSQL
DB_PASS=adminpassword     # Contraseña de PostgreSQL
DB_NAME=mydatabase        # Nombre de la base de datos
```

## Ejecución del Proyecto

### 1. Levantar el proyecto con Docker

Asegúrate de tener Docker instalado y funcionando, luego ejecuta el siguiente comando:

```bash
npm run docker:up
```

Este comando levantará tanto la aplicación Node.js como el servicio de PostgreSQL en contenedores Docker. La aplicación estará disponible en `http://localhost:30012`.

### 2. Ingresar al contenedor con `sh`

Ejecuta el siguiente comando:

```bash
npm run docker:cmd
```
### 3. Ejecute la migración y el archivo semilla

Ejecuta los siguientes comandos en el siguiente orden y asegurate de estar dentro del contenedor:

```bash
npm run db:migration
```
```bash
npm run db:seed
```

### 4. Detener el proyecto en Docker

Para detener el proyecto en Docker, puedes ejecutar el siguiente comando:

```bash
npm run docker:down
```

### 3. Ejecución local (sin Docker)

Si prefieres ejecutar el proyecto localmente, sigue estos pasos:

1. Asegúrate de tener PostgreSQL instalado y en ejecución localmente.
2. Crea una base de datos en PostgreSQL que coincida con el nombre en tu archivo `.env`.

Comandos utiles en MacBook con PostgreSQL

Comando para levantar el servicio de postgresql en MackBook

```bash
brew services start postgresql@14
```

Comando para usar el usuario postgres 

```bash
psql -U postgres -d mydatabase
```

Comando para listar las tablas

```bash
\dt
```

Comando para crear la base de datos
```bash
CREATE DATABASE mydatabase;
```
   
3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta las migraciones para configurar la base de datos:

```bash
npm run db:migration
```

5. Si deseas cargar datos de prueba, ejecuta los seeders:

```bash
npm run db:seed
```

6. Inicia la aplicación localmente:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Endpoints

1. **GET /users**: Devuelve todos los usuarios.
2. **POST /users**: Crea un nuevo usuario (requiere JSON con `name` y `email`).

## Variables de Entorno

El archivo `.env` se encuentra en el directorio raíz del proyecto y contiene las variables necesarias para la configuración de la base de datos.

## Scripts del package.json

Los siguientes scripts están definidos en el archivo `package.json`:

- **start**: Inicia la aplicación (`node src/app.js`).
- **docker:cmd**: Ingreso al contenedor (`docker-compose exec microservice sh`).
- **docker:up**: Levanta los contenedores Docker (`docker-compose --env-file .env up --build`).
- **docker:down**: Detiene los contenedores Docker (`docker-compose down`).
- **db:migration**: Ejecuta las migraciones de la base de datos (`npx sequelize-cli db:migrate`).
- **db:seed**: Ejecuta los seeders para poblar la base de datos (`npx sequelize-cli db:seed:all`).

## Patrones de Diseño y Buenas Prácticas

Este proyecto sigue el patrón MVC (Modelo-Vista-Controlador), manteniendo la separación de responsabilidades entre modelos, controladores y rutas. Sequelize se utiliza como el ORM para interactuar con PostgreSQL de forma segura y eficiente.

## Solución de Problemas

1. **Problemas de conexión a la base de datos**: Verifica que PostgreSQL esté corriendo y que las variables de entorno en el archivo `.env` sean correctas.
2. **Problemas con Docker**: Asegúrate de que Docker esté instalado correctamente y que los servicios se hayan levantado.

## Contacto

Para cualquier consulta o soporte adicional, por favor contacta a:

**Nombre:** Gustavo Adolfo García Blanco  
**Email:** [gustavgarcia@me.com](mailto:gustavgarcia@me.com)  
**LinkedIn:** [Perfil de LinkedIn](https://www.linkedin.com/in/gustavogblanco)

---

Este README proporciona una guía completa para la configuración y uso del proyecto Redis Geolocation, asegurando que cualquier usuario pueda seguir los pasos sin complicaciones. Si necesitas más ayuda o quieres sugerir mejoras, no dudes en contactarnos.
