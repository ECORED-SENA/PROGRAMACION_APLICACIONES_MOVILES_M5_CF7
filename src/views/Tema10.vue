<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 10
      h1 SQLite para aplicaciones livianas

    p(data-aos="fade-up") Esta herramienta de uso libre permite almacenar y administrar información en dispositivos móviles como los smartphones y también en pequeños dispositivos utilizados en IoT, de manera sencilla, eficaz y rápida; utiliza y soporta el lenguaje SQL sin ninguna limitación, implementando el estándar SQL92.

    .row.mt-5
      .col-md-6.mb-4.p-5
        .imagen-titulo--der.color-primario
          figure
            img.image_floating(data-aos="fade-right" src='@/assets/curso/tema10/1.svg', alt='')

      .col-md-6.p-4
        h3.mt-3(data-aos="fade-left") Historia
        p.mt-3(data-aos="fade-left") Aparece en el año 2000 gracias a su desarrollador Richard Hip, bajo licencia GPL, su código es de dominio público y puede ser modificado su evolución es muy grande gracias a la cantidad de colaboradores que generan librerías que permiten ser utilizado en casi cualquier sistema y es soportado por muchos lenguajes de programación permitiendo una correcta integración, es posible encontrar una gran cantidad de componentes, librerías y drivers para interactuar con SQLite desde una gran diversidad de lenguajes y plataformas de programación. Se adapta a lenguajes modernos como Java, Perl, Python, PHP, Ruby, C#, y a lenguajes más viejos como Pascal, SmallTalk, Clipper, para todos es posible librerías y ejemplos de código para SQLite (Rómmel, s. f.).

    .row
      
      .col-md-6.p-4
        h3.mt-3(data-aos="fade-right") Principales características
        p.mt-3(data-aos="fade-right") SQLite promueve a trabajar con proyectos livianos. Su base de datos se encuentra en un solo archivo y su funcionamiento se puede limitar al solo uso de la memoria Ram, no tiene dependencias externas todos sus procesos y actividades están autocontenidas, utiliza librerías de acceso que permite la integración con múltiples lenguajes de programación. Soporta texto en formato UTF-8 y UTF-16, así como datos numéricos de 64 bits. Trabaja con funciones SQL definidas por el usuario (UDF). Su código fuente es de dominio público y se encuentra muy bien documentado (Rómmel, s. f.). 
      
      .col-md-6.mb-4.p-5
        .imagen-titulo--der.color-acento-botones
          figure
            img.image_floating(data-aos="fade-left" src='@/assets/curso/tema10/2.svg', alt='')

    .row
      .col-md-6.mb-4.p-5
        .imagen-titulo--der.color-primario
          figure
            img.image_floating(data-aos="fade-right" src='@/assets/curso/tema10/3.svg', alt='')

      .col-md-6.p-4
        h3.mt-3(data-aos="fade-left") Migraciones a diversas plataformas
        p.mt-3(data-aos="fade-left") Fue diseñado con lenguaje de programación C, por esa sencilla razón es soportado para realizar migraciones sencillas a diversas plataformas de sistemas operativos y a dispositivos electrónicos que requieran bases de datos pequeñas, SQLite es una base de datos muy eficaz para cualquier desarrollo en ambientes embebidos, pues ofrece un alto rendimiento, eficacia, seguridad, estandarización e inter tolerabilidad. Todo esto la ha catapultado a convertirse en la base de datos de facto para desarrollos móviles (Rómmel, s. f.).




</template>

<script>
export default {
  name: 'Tema10',
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
.imagen-titulo.color-primario:before, .color-primario.imagen-titulo--der:before, .color-primario.imagen-titulo--izq:before
  background-color: #4DD0E1
</style>
