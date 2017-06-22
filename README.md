# node-rest

Un workshop para hacer APIs REST con Node.js.

## Requerimientos
Vas a necesitar contar con Node.js instalado (se recomienda nvm), npm y un editor de texto.

## Herramientas utilizadas
- Swagger
- Express.js v4 (v2 y v3 están descontinuadas, no las uses!)
- express-generator

## Express en 5 minutos (sin template engines)
Express se basa en una arquitectura enfocada a middlewares para atender peticiones HTTP. El ciclo de una petición HTTP puede estar compuesta por uno o más middlewares y cada uno de estos pueden tener su propia lógica, sus efectos secundarios y pueden también ser compartidos o únicos para determinados tipos de peticiones.

Las rutas o lo que se conocen cómo _paths_ se puede representar cómo un middleware que se aplica en base a una regla. Esa regla puede ser simplemente una cadena de caracteres, una cadena de caracteres con parámetros o una expresión regular.

En cuánto a arquitectura de archivos, vé de la siguiente forma:
```
```
dónde `app.js` se encargaría únicamente de la configuración de la aplicación de Express.js en sí, cómo de agregar middlewares generales, rutas, la configuración necesaría para autorización/autenticación y el template engine. El directorio "routes" es dónde agregaremos los archivos con las rutas de nuestra aplicación.

## Arrancando
Primero deberías clonar este repo:

```
git clone https://github.com/a0viedo/node-rest
```

El segundo paso sería instalar las dependencias:
```
npm install
```

A esta altura si ejecutás 

```
DEBUG=myapp:* NODE_ENV=development npm run dev
```

deberías ver que la aplicación inicia correctamente.

## Consejos generales
Use environment variables to indicate that the process is running in _development_ or _production_ mode since it will be best for each case.
Usá variables de entorno para indicar que el proceso debe ejecutarse en modo _development o _production_ ya que esto permitirá su mejor funcionamiento para cada caso.

No es recomendable terminar la conexión TLS en Node.js, sería mejor usar un API gateway que termina TLS y simplemente utilizar HTTP para comunicarte con el API gateway.

No dejar valores por defecto cómo puertos o información de conexión en el código y utilizar variables de entorno para estos casos. En el entorno de desarrollo se puede utilizar un archivo local y setear la variable `NODE_ENV=development` para que tome efecto.
