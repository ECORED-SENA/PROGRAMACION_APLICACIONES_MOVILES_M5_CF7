<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Diseño de bases de datos

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") Este diseño se realiza cuando se cuenta con toda la información disponible del proyecto; esta información debe estar catalogada y ordenada de manera clara para iniciar la clasificación de datos y su organización, con lo que se genera el modelo lógico y conceptual, basado y fundamentado en el modelo físico que se obtuvo como resultado de la investigación y levantamiento de la información.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 1] #[em Base de datos relacional]

    figure.mt-5
      img.image_floating(data-aos="fade-up" src="@/assets/curso/tema1/2.svg")

    p.mt-5(data-aos="fade-up") Algunos parámetros en la generación del diseño de la base de datos son:

    .row.mt-5.p-5.caja_flotante_azul(style="background-color:#DBFBFF")
      .col-md-5.mb-3
        ul.lista-ul
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Determinar el propósito de la base de datos.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Buscar y organizar la información.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Dividir la información en tablas.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Convertir los elementos de información en columnas.
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Especificar las claves principales. 
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Establecer las relaciones de tablas. 
          li(data-aos="fade-up")
            i.fas.fa-check(style="color: #FFA726;")
            |  Aplicar las reglas de normalización.

      .col-md-7(style="place-self: center;text-align: center;")
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg" style="max-width:400px;display:inline;")




</template>

<script>
export default {
  name: 'Tema1',
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
.bloque-texto-a.color-primario
  background: url("../assets/curso/tema1/1.svg")
  background-size: contain
.bloque-texto-a:before
  left: 44% !important
</style>
