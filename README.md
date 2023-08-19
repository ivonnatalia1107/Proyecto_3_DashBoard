# Proyecto Tablero de Datos.
ClearClimapp es un proyecto de tablero de datos sobre el clima el cual consume datos de la API de OpenWeatherMap para proporcionar información relacionada con la temperatura en todo el mundo. El proyecto se ha desarrollado utilizando tecnologías web estándar, como HTML, CSS y JavaScript, junto con la biblioteca Chart.js para la representación gráfica de datos. 

A continuación, se proporciona una guía sobre cómo funciona el proyecto y cómo puede ser ejecutado:

## Características Principales.
1.	**Header:** La página principal presenta un encabezado que contiene un cuadro de entrada (input) y un botón. Los usuarios pueden ingresar el nombre de una ciudad o país y hacer clic en el botón (o presionar 'Enter') para obtener información meteorológica relacionada con ese lugar.
2.	**Sección de Datos Principales:** Esta sección muestra información esencial sobre el clima, la cual incluye:
     - _Icono del Clima:_ Una representación gráfica del estado actual del clima.
     - _Nombre de la Localización:_ La ciudad o país ingresado por el usuario.
     - _Temperatura:_ La temperatura actual en grados Celsius.
     - _Humedad:_ La humedad relativa actual en porcentaje.
     - _Velocidad del Viento:_ La velocidad del viento actual en kilómetros por hora.
3.	**Gráfico de Barras:** En la segunda sección, encontrarás un gráfico de barras generado con Chart.js. Este gráfico compara tres parámetros:
     - _Temperatura máxima:_ Que representa los datos de la temperatura máxima obtenida en el día ingreso por el usuario.
     - _Temperatura mínima:_ Que representa los datos de la temperatura mínina obtenida en el día ingreso por el usuario.
     - _Sensación térmica:_ Que representa los datos de la sensación térmica obtenida en el día ingreso por el usuario.
4.	**Pronóstico del Clima para 5 Días:** La tercera sección presenta cinco mini cards que muestran el pronóstico del clima para los próximos 5 días. Cada tarjeta contiene información sobre la fecha, el icono del clima, la temperatura máxima esperada para cada día.

## Recursos y Tecnologías Utilizadas:
- HTML: Para la estructura de la página web.
- CSS: Para la estilización y diseño de la interfaz.
- JavaScript: Para la lógica y la interacción con la API de OpenWeatherMap.
- Chart.js: Para la creación del gráfico de barras interactivo.
- OpenWeatherMap API: Para la obtención de datos meteorológicos en tiempo real.

Además se ha integrado un sistema responsivo que permite la correcta visualización del proyecto tanto en dispositivos grandes como pequeños.

## Visualización del Proyecto:

Puedes ver un preview haciendo click en: [ClearClimapp](https://ivonnatalia1107.github.io/Proyecto_3_DashBoard/)

También puedes acceder al código clonando el repositorio en una máquina local usando:

`git clone` https://github.com/ivonnatalia1107/Proyecto_3_DashBoard.git

## Disclaimer.
Este proyecto fue creado de forma colaborativa con [ivonnatalia1107](https://github.com/ivonnatalia1107) y [Dreeyas](https://github.com/Dreeyas) con fines educativos.



