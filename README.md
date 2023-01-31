Hola, este es mi primer proyecto con React Native y React, se trata de una aplicación en la cual vamos a consumir la API de Pexels y utilizaremos estos datos para mostrarlos, filtrarlos por una search, tendremos un pequeño paginado y podremos descargar estas imagenes a nuestro dispositivos mobiles.

En caso de querer probarla puede clonar este repositorio, realizar el correspondiente npm install y la descarga de una app en su celular llamada Expo Go y una vez realizado el npm start en la aplicacion escanear el codigo QR que le aparecera en la consola en la aplicacion Expo Go disponible en Google Play Store.

Esta aplicación consta de dos apartados el Home y el Detail, a continución paso a describirlos.

HOME.

En este apartado podremos ver en la parte superior derecha un texto Search, una cantidad de resultados dependiendo de lo que busquemos, por default se utilizara "programming", tendremos tambien dos flechas para viajar de pagina en pagina.
mas abajo podremos ver las imagenes, un total de 20 imagenes por pagina, al tocar en alguna imagen nos redirigira al detail de la misma.
Al tocar el texto Search abriremos una barra de navegación y al tocar el boton podremos buscar.

<img src='https://firebasestorage.googleapis.com/v0/b/pagina-lg-simulacion.appspot.com/o/home.jpeg?alt=media&token=1fb034a9-9f67-4873-a5b3-ff6c7d65d9c9' />
<img src='https://firebasestorage.googleapis.com/v0/b/pagina-lg-simulacion.appspot.com/o/homebuscar.jpeg?alt=media&token=c255b412-f4b5-4f90-86e5-5181fdc6d2ad'/>

DETAIL.

En esta sección tendremos la imagen con mas tamaño, el nombre del creador y al tocar en su nombre podremos navegar a su perfil.
Tocando en el boton descargar se abrira una pestaña pidiendonos permiso para realizar la descarga y en caso de aceptar se realizara la misma y por ultimo en la parte inferior tendremos recomendaciones de imagenes en las cuales apareceran imagenes relacionadas a la imagen del detail.

<img src='https://firebasestorage.googleapis.com/v0/b/pagina-lg-simulacion.appspot.com/o/detalle.jpeg?alt=media&token=7f26575f-2dff-4361-b5cd-db9f8ff29f93'/>
<img src='https://firebasestorage.googleapis.com/v0/b/pagina-lg-simulacion.appspot.com/o/descarga.jpeg?alt=media&token=d4d69017-978e-4470-94b7-06a4744cd9a8'>

