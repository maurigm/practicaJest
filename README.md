# EN ESTE REPOSITORIO REALIZAMOS UN PROYECTO EN EL CUAL COMENZAMOS A UTILIZAR JEST

# CREAMOS EL PROYECTO CON VITE

- Donde la creacion del proyecto se realiza con lo siguientes comandos en la terminal de desarrollo:
  1)  npm create vite@latest (aqui le ponemos nombre al proyecto y elegimos con que lenguaje y libreria trabajaremos )
  2)  cd name-project
  3)  npm install
  4)  npm run dev

  en caso de ser necesario eliminaremos todos los archivos que no sean necesarios de la carpeta "src" para el proyecto.

Documentacion de Vite: https://vitejs.dev/guide/




# INSTALACION Y CONFIGURACION DE JEST

Para instalar JEST en el proyecto debemos colocar el siguiente comando en la Terminal:
  
  npm install --save-dev jest

una vez que se instala procederemos a instalar los types para poder tener el autocompletado de las funciones de Jest, los instalaremos del siguiente modo:

  npm install --save-dev @types/jest @types/react @types/react-dom

Ademas para poder correr los test de JEST, en el archivo package.json agregaremos:

  "scripts": {
    "test": "jest --watchall"
  }

nota:  "--watchall" nos sirve para no estar corriendo el test cada vez que modifiquemos el archivo a testear y nos brinda un menu para ser ma eficientes. 

luego tendremos que instalar Babel para poder trabajar con JEST:

  npm install --save-dev babel-jest @babel/core @babel/preset-env

Configura Babel para tu versión actual de Node creando un archivo "babel.config.js" en la raíz de tu proyecto, que contenga lo siguiente:
    
    module.exports = {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };




Documentacion: https://jestjs.io/es-ES/docs/getting-started



Definiciones y teoria:

Los tests pueden ser unitarios o de integracion, en las cuales las unitarias como su nombre indica, estan enfocados en pequeñas funcionalidades mientras que los test de integracion estan enfocados en como reaccionan a un estimulo, varias piezas en conjunto.

Para realizar los test o pruebas consta de tres partes: 

  1) Inicializacion: se declaran variables
  2) Estimulo: lo que se le aplica al sujeto de prueba
  3) Observacion del comportamiento

