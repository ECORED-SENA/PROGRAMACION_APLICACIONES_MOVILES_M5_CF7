<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 ¿Por qué no utilizar conexión directa a base de datos?

    p(data-aos="fade-up") No se recomienda conectar la base de datos, por medio de una conexión persistente, directamente a la aplicación, ya que esto podría traer complicaciones cuando hay mala conectividad o fallas de conexión móvil. En cambio, sí es recomendable utilizar un método de solicitudes HTTP, sin estado (#[em stateless HTTP requests]). Este diseño sin estado, simplifica el esquema del servidor porque no hay necesidad de asignar, dinámicamente, almacenamiento para tratar las conversaciones en curso. Si un cliente desaparece, en medio de la transacción, ninguna parte del sistema tiene que ser responsable de limpiar el estado actual del servidor.

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema6/1.svg" data-aos="fade-up")

    h5.mt-5(data-aos="fade-up") A continuación, se indican otras razones por las que no es recomendable la conexión directa a base de datos.


    .row.mt-5.col-md-9.m-auto
      .col-md-6.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#FFCA28;height:100%;")
          figure.text-center
            img.imagen_flotante_animada(style="display:inline;max-width:140px;" src="@/assets/curso/tema6/2.svg")

          h4.mt-4(data-aos="fade-up") Saturación y retrasos
          p.mt-3(data-aos="fade-up") Otro de los inconvenientes que se pueden llegar a presentar es la gran cantidad de conexiones que se realizan desde las aplicaciones móviles a la base de datos; esto puede generar problemas al momento de realizar el monitoreo de los procesos y limitar la capacidad de respuesta, saturando la base de datos y generando retardos en las respuestas.

      .col-md-6.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#4DD0E1;height:100%;")
          figure.text-center
            img.imagen_flotante_animada(style="display:inline;max-width:140px;" src="@/assets/curso/tema6/3.svg")

          h4.mt-4(data-aos="fade-up") Riesgos de seguridad
          p.mt-3(data-aos="fade-up") Los resultados enviados desde la DB a la aplicación consumen gran ancho de banda y energía de la batería, y otro de los grandes problemas al proceder directamente a la base de datos es la exposición de la base de datos de manera directa y se corren riesgos de seguridad por no contar con protocolos que medien la conexión y sirvan como filtros seguros de autenticación.



</template>

<script>
export default {
  name: 'Tema6',
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
