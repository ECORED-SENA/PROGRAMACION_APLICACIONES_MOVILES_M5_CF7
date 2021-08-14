<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Creación de base de datos postGresqul

    p(data-aos="fade-up") Este gestor de base de datos relacional, fundamentado sobre el modelo orientado a objetos, es de uso libre y cuenta con un excelente soporte para crear y administrar bases de datos de diferente tamaño y servicios. En este punto del componente, se visualizarán los pasos de la creación de una base de datos y su alojamiento sobre un servidor que provee la plataforma, monitoreando todas las actividades y el flujo de información que se genera, en tiempo real, sobre la aplicación móvil.

    p.mt-4(data-aos="fade-up") #[strong A continuación, se muestran los pasos y orientaciones de creación de base de datos, en postGresqul. Se recomienda aplicar cada uno de ellos, abriendo las diapositivas que los contienen. ¡Adelante!]

    div.mt-5(active="true")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") PCreación de base de datos #[br] postGresqul
              
          b-tab
            template(#title)
              div.pt-3.indicador__container(style="border-top:1px #B2E6FF solid;")
                div.link__tab 1. Crear y administrar una base de datos pPostgreSQL
                .indicador--click
            b-card-text
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Para crear y administrar una base de datos PostgreSQL con un entorno gráfico amigable, se puede utilizar la herramienta pgAdmin. Para trabajar con este entorno se puede ingresar en el sitio oficial de la herramienta https://www.pgadmin.org/ donde se encuentra el escenario que se muestra en la figura 3. Allí hay la posibilidad de realizar una demostración del funcionamiento SGBD en línea; también es posible descargar la aplicación o crear un usuario y trabajar sobre la plataforma web.
              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 3] #[em Página de inicio para la creación de base de datos PostgreSQL]
              figure
                img(src="@/assets/curso/tema4/1.svg")
                figcaption Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                div.link__tab 2. Entorno web de administración
            b-card-text
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Esta herramienta cuenta con un sandbox en el cual se puede realizar una práctica básica guiada, familiarizándose con el entorno de trabajo pgAdmin. 
              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 4] #[em Bienvenida al entorno web de administración]
              figure
                img(src="@/assets/curso/tema4/2.svg")
                figcaption Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                div.link__tab 3. Entorno en línea y registro en plataforma
            b-card-text
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p El siguiente procedimiento permite crear y trabajar una base de datos utilizando el entorno en línea, realizando un registro en la plataforma por medio de un usuario y una contraseña.
              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 5] #[em Ingreso en la plataforma]
              figure
                img(src="@/assets/curso/tema4/3.svg")
                figcaption Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                div.link__tab 4. Entorno de trabajo PGAdmin
            b-card-text
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Este es el entorno de administración proporcionado PGAdmin. Se puede realizar el trabajo de administrar un nuevo servidor, realizar la configuración del entorno de trabajo; también es posible ingresar, directamente, a la página web de PGAdmin. Así mismo, se puede encontrar e ingresar a la comunidad y acceder a toda la documentación de soporte de PostgreSQL

              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 6] #[em Entorno de trabajo de PGAdmin ]
              figure
                img(src="@/assets/curso/tema4/4.svg")
                figcaption Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                div.link__tab 5. Creación de un servidor
            b-card-text
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p PGAdmin permite realizar la creación de un servidor de base de datos sobre el cual se creará y vinculará la base de datos que, posteriormente, será vinculada a la aplicación o al programa que se realice; también posibilita realizar una configuración básica de administración y soporte.

              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 7] #[em Creación de un servidor ]
              figure
                img(src="@/assets/curso/tema4/5.svg")
                figcaption Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                div.link__tab 6. Seguridad e ingreso
            b-card-text
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Para realizar la configuración y creación de la base de datos es importante la seguridad; por tal razón siempre pedirá la contraseña para realizar cualquier cambio importante sobre el servidor. 

              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 8] #[em Contraseña de ingreso]
              figure
                img(src="@/assets/curso/tema4/6.svg")
                figcaption Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org 

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                div.link__tab 7. Base de datos creada y monitoreada
            b-card-text
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Después de la vinculación de la base de datos al servidor y a la aplicación, es posible realizar la administración y el seguimiento de todos los procesos, actividades y rendimiento de la base de datos. 

              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 9] #[em Base de datos creada y monitoreada]
              figure
                img(src="@/assets/curso/tema4/7.svg")
                figcaption Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org 

</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    $('.link__tab').click(function() {
      $('.link__tab').removeClass('activa')
      $(this).addClass('activa')
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
.card
  border:0 !important
.card-header
  background-color: #F3F9FF !important
.nav-link
  color: #1565C0 !important
  background-color: #f3f9ff !important
  border-top: 1px #B2E6FF solid !important
  border-radius: 0px !important
.nav-pills
  border-top: 9px #B4E2F8 solid !important
.nav-link:first-child
  border-top:0px !important
.nav-link.active
  font-weight:bold !important
.card-body
  padding: 0px
.activa
  font-weight: bold
</style>
