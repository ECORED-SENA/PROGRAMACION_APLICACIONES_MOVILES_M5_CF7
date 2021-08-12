<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Sistemas gestores de bases de datos no relacionales (NoSQL)

    p(data-aos="fade-up") Una base de datos no relacional (NoSQL) no requiere de estructuras de datos fijas, como tablas, ni garantiza completamente las características ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad); las bases de datos no relacionales son utilizadas en ambientes distribuidos que deben estar siempre disponibles y activos, gestionando un enorme flujo de información.

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema5/1.svg" data-aos="fade-left")

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul(style="background-color: #DBFBFF;")
      p(data-aos="fade-up") Para administrar este tipo de arquitectura de bases de datos, existen también unos gestores que facilitan el trabajo a los desarrolladores y administradores; los principales sistemas (SGBD NoSQL) que se puede encontrar son, a saber:

    TabsA.color-acento-botones.mt-5(data-aos="fade-up")
      .tarjeta.color-primario.p-4(titulo="MongoDB" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") MongoDB
        p.mt-4(data-aos="fade-up") Mongo es el gestor de datos más utilizado para la creación y administración de base de datos no relacionales. Está enfocado en el manejo de ficheros que permiten almacenar la información en estructuras BSON, con un esquema dinámico que facilita el proceso de integración.

        h5.mt-4(data-aos="fade-up") Características
        p.mt-3(data-aos="fade-up") Algunas de sus características principales es que permite la indexación y réplica de los datos, realiza un balanceo de carga, todo el almacenamiento se realiza sobre ficheros que permiten realizar las consultas #[em ad hoc], es de uso libre y presenta una completa plataforma de administración. Es importante resaltar que grandes empresas, como Google, Facebook, eBay, Cisco o Adobe, utilizan este gestor como su principal herramienta para administrar sus bases de datos; ello indica que su soporte es bien robusto y permite el manejo de grandes volúmenes de datos y grandes flujos de información.

      .tarjeta.color-primario.p-4(titulo="Redis" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") Redis
        p.mt-4(data-aos="fade-up") Se basa en el método de almacenamiento clave-valor. Se podría comparar con el manejo de un vector o vectores que almacenan todos los datos, sin importar su tipo o formato. Se pueden almacenar cadenas, listas, enteros, #[em float], etc. El principal uso de este SGBD es el almacenamiento en memoria caché y la administración de sesiones. Sus características más relevantes son la atomicidad y persistencia, su gran velocidad en tiempo de respuesta, la simplicidad en sus procesos.

      .tarjeta.color-primario.p-4(titulo="Cassandra" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") Cassandra
        p.mt-4(data-aos="fade-up") Este SGBD utiliza el método clave-valor para el almacenamiento. Trabaja sobre el modelo NoSQL distribuido y masivamente escalable. Una de sus principales características es que es multiplataforma, cuenta con su propio lenguaje de consultas, (CQL) #[em Cassandra Query Languaje]. Utiliza una arquitectura #[em peer-to-peer], algunas de las plataformas o compañías que lo utilizan son Facebook, Twitter, Instagram, Spotify o Netflix, entre otras 

      .tarjeta.color-primario.p-4(titulo="Existen algunos otros SGBD" style="background-color:rgb(124 197 255 / 15%)")
        h4(data-aos="fade-up") Existen algunos otros SGBD
        p.mt-4(data-aos="fade-up") Para elegir el SGBD adecuado, se debe empezar principalmente definiendo qué tipo de datos se almacenarán y cómo se van a administrar. Entre los sistemas gestores de base de datos mencionados es posible encontrar el que mejor se adapte a las necesidades y a la capacidad de inversión a realizar, volumen de información a almacenar, tipo de consultas a realizar, flujo y tamaño de información a procesar.

        ul.lista-ul
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Azure Cosmos DB.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  RavenDB.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  ObjectDB.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Apache CouchDB.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Neo4j.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Google BigTable.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Apache Hbase.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Amazon DynamoDB.






</template>

<script>
export default {
  name: 'Tema5',
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
.tabs-a__tab
  background-color: #E8E8E8
</style>
