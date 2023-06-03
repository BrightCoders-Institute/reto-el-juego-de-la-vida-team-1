[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-MyOgzrv)
![BrightCoders Logo](img/logo.png)

# El Juego de la Vida
* [Descripción](#descripción)
* [Instalar dependencias](#instalar-dependencias)
* [Correr proyecto](#Correr-proyecto)
* [¿Cómo usar el proyecto?](#¿Cómo-usar-el-proyecto?)
* [Créditos](#Créditos)

## Descripción
El Juego de la Vida consiste en una colección de células que, basándose en algunas reglas matemáticas, pueden vivir, morir o multiplicarse. 

Comienzas con una cuadrícula bidimensional de células, donde cada célula está viva o muerta. En esta versión del problema, la cuadrícula es finita y ninguna vida puede existir más allá de los bordes. Al calcular la siguiente generación de la cuadrícula, sigue estas reglas:

1.  Cualquier célula viva con menos de dos vecinos vivos muere, como si fuera por falta de población.
2.  Cualquier célula viva con más de tres vecinos vivos muere, como si fuera por sobre-población.
3.  Cualquier célula viva con dos o tres vecinos vivos sobrevive a la siguiente generación.
4.  Cualquier célula muerta con exactamente tres vecinos vivos se convierte en una célula viva.

## Instalar dependencias 
En el proyecto se utilizaron las dependencias:
- **Eslint** (herramienta que ayuda a cumplir buenas prácticas de codificación).
- **Jest** (para ejecutar las pruebas del código).

Por lo que para instalarlas y posteriormente ejecutarlas, lo que se debe hacer primero es abrir una terminal en el proyecto y ejecutar el comando 
`npm install`
Una vez que ya se instalaron las dependencias, para ejecutar el *ambiente de pruebas* se debe ejecutar el comando 
`npm test` 

## Correr proyecto
El proyecto consiste en un archivo JavaScript llamado *index.js* que contiene el código para el juego. En él se tiene la clase `JuegoDeLaVida`, en la cual se tienen diferentes métodos tanto para la creación de la cuadrícula, el cálculo de los vecinos, la modificación de las células vivas o muertas, entre otras.

Para correr el juego hay dos opciones:
- *Extensión* ***Code Runner:*** En el edito Visual Studio Code, instalamos la extensión *Code Runner* (https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner), una vez instalada, simplemente abrimos el archivo *index.js* y presionamos las teclas **Ctrl+Alt+N** o damos click en el ícono "**▷**" ubicado en la parte superior derecha. Esto abre una ventana donde se ve el resultado de la ejecución.
- Usando **NodeJS**: Para esta opción se debe tener instalada la herramienta Node.Js. En esta opción no se necesitan extensiones adicionales. Simplemente se abre una terminal dentro del proyecto, entramos a la carpeta /src/ (*`cd src`*) y ejecutamos el comando **node index.js** 
Esto ejecuta el código js y nos muestra la salida en consola.

## ¿Cómo usar el proyecto?
Una vez que se ejecuta el proyecto, podremos ver las generaciones de células, desde la primera (desde donde parten las demás), como las siguientes que se irán calculando con base en las reglas del juego. 

**Nota:** La cantidad de generaciones que se van a calcular será el número que le pasemos como argumento al método `play()`.

## Créditos
- Alfredo Paz (*Alfredo20164920*)
- Arnoldo Cernas (*AMCernas*)
- Orlando Ledón (*landillo*)
- Fernando Aguilar ()
- Alberto García (*AlbertoG22*)
## Badges
*  [![Codacy Badge](https://app.codacy.com/project/badge/Grade/0f579a010cf543beab1a846035db9a53)](https://app.codacy.com/gh/BrightCoders-Institute/reto-el-juego-de-la-vida-team-1/dashboard?branch=main)
