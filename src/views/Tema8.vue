<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Configuración de Firebase a una app móvil híbrida

    p(data-aos="fade-up") Una buena opción para trabajar bases de datos en aplicaciones móviles híbridas es utilizar un #[em web] server como Firebase, que ofrece a los desarrolladores y administradores de bases de datos opciones para crear aplicaciones de plataforma web, Android e iOS, funcionales y versátiles. Firebase se puede comprender como una plataforma que integra y presta varios servicios esenciales para el desarrollo de aplicaciones móviles; es un producto soportado por Google con grandes complementos y funciones para desarrollar, manejar, administrar y potenciar las aplicaciones móviles y #[em software] en general.

    figure.mt-5
      img.image_floating(data-aos="fade-up" src="@/assets/curso/tema8/1.svg")

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul(style="background-color: #DBFBFF;")
      p(data-aos="fade-up") A continuación, se muestra cómo Firebase es una recopilación de herramientas en las que los diseñadores, desarrolladores y analistas pueden trabajar y apoyarse buscando mejor rendimiento, creando aplicaciones.

    h3.mt-5(data-aos="fade-up") Firebase y su historia

    p.mt-4(data-aos="fade-up") Firebase inició en el año 2011 como una idea de Andrew Lee y James Tamplin; ofrecía una API para la integración de chat en línea para sitios web, pero este chat estaba siendo utilizado para transmitir mensajes que no eran de chat. De esa experiencia nació una plataforma para la sincronización de datos en tiempo real. El primer producto Firebase lanzado fue la base de datos Firebase en tiempo real. Se trató de una API que permitía la sincronización de datos de aplicaciones implementadas en dispositivos Android, web e iOS. En el 2014 Google compró la compañía y la fusionó con Divso, otra empresa que contaba con una plataforma de alojamiento web.

    AcordionA.mt-5(data-aos="fade-up" tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Funcionalidades de Firebase")
        .col-md-12
          p Lo primero a considerar es que Firebase no es gratuito y tiene algunos servicios que son básicos y permiten realizar actividades y operaciones básicas. Se denomina plan #[em Spark] de #[em Firebase] por sus características y sirve para ayudar a los desarrolladores a comenzar; este plan ofrece buenas posibilidades de lectura y escritura de la base de datos con restricciones, pero con suficientes posibilidades de trabajar una aplicación de un tamaño medio.

      .row(titulo="Velocidad en el desarrollo")
        .col-md-12
          p Una de las grandes ventajas de utilizar Firebase consiste en reducir el tiempo de desarrollo de aplicaciones. Soluciona el acceso a servidores evitando el mantenimiento de bases de datos y servicios #[em backend]. Permite a desarrolladores de #[em frontend] realizar la administración de todo el trabajo, gracias a los servicios de almacenamiento de datos, la autenticación, las notificaciones, el análisis. El proceso de integración a las aplicaciones es sencillo, cuenta con SDK que genera el enlace directo entre la aplicación y Firebase; es muy fácil de instalar y configurar.

      .row(titulo="Almacenamiento en la nube")
        .col-md-12
          p Cuenta con dos bases de datos que pueden ser la solución a muchos problemas de conexión y almacenamiento: Firestore y Firebase's Realtime Database. Permite el almacenamiento en la nube sin esfuerzo y admite el desarrollo de aplicaciones sin servidor a través de funciones en la nube integradas. Firebase ofrece soluciones para todo el ciclo de desarrollo de aplicaciones, creando, liberando y monitoreando aplicaciones. El soporte y la integración de la plataforma es excelente, pues Google genera la integración fácilmente a todos sus demás servicios, por ejemplo, Google Maps se puede integrar de manera sencilla en una aplicación móvil.

      .row(titulo="Rendimiento óptimo")
        .col-md-12
          p No ofrece un servidor, trabaja sobre un clúster de base de datos optimizando el rendimiento, utilizando una arquitectura sin servidor que requiere que los usuarios paguen en función de las solicitudes llamadas respuestas, es decir, por el flujo de información que maneja la aplicación. Los desarrolladores obtienen la libertad de adoptar un enfoque práctico para controlar DevOps, la configuración, la infraestructura y la planeación de la capacidad. Firebase viene con un kit de ML con API fácilmente disponibles para diferentes plataformas móviles, como identificación de texto, detección de rostros, etiquetado de imágenes, escaneo de códigos de barras, servicios que se prestan de manera individual y tienen un costo diferencial. ML puede ser utilizado por los desarrolladores de iOS y Android, independientemente de su nivel de experiencia.

      .row(titulo="Funciones en la nube")
        .col-md-12
          p Firebase Cloud Functions hace referencia a un marco sin servidor que permite a los desarrolladores ejecutar código #[em backend] para responder a los eventos desencadenados por características HTTPS y Firebase. #[em Google] Cloud se utiliza para almacenar código TypeScript o JavaScript y se puede ejecutar dentro de un entorno administrado. Firebase soluciona uno de los problemas más complejos al momento de desarrollo y ofrece buena seguridad sobre los datos y disponibilidad óptima de estos con la ayuda de copias de seguridad periódicas. Las aplicaciones se encuentran seguras frente a las posibilidades de fallos y pérdida de datos utilizando el sistema de copia de seguridad automática de la plataforma.

      .row(titulo="Autenticación y mensajería en la nube")
        .col-md-12
          p La autenticación es una característica de Firebase que ofrece bibliotecas de interfaz de usuario listas para usar, backend y SDK convenientes para la autenticación de aplicaciones de usuario. La autenticación se admite a través de números de teléfono, contraseñas y proveedores como Google, Twitter, Facebook y otros. Firebase Cloud Messaging o FCM se refiere a un servicio de mensajes multiplataforma para mensajería gratuita. Esta característica permite a los propietarios de aplicaciones, notificar a las aplicaciones cliente, si se van a sincronizar los datos o los correos electrónicos.

     


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(10px 5px 4px rgba(0,0,0,.1))
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.09))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
.caja__mostrar
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
.caja__mostrar:hover
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
  transform: scale(1.04)
.bloque-texto-a.color-secundario:before
  background-color: #A9EBF4
.pasos-a.color-primario .pasos-a__circle
  background-color: #4DD0E1
.pasos-a.color-primario .pasos-a__circle div
  color: white
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #4DD0E1
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #4dd0e1
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #4dd0e1
</style>
