<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Beneficios de un servicio web

    p(data-aos="fade-up") Los principales beneficios que se obtienen del uso de los servicios web, para una aplicación móvil, es que se puede lograr una conexión de corta duración, con un estado mínimo, permitiendo volver al estado inicial si la transacción o el proceso no finalizó correctamente. El dispositivo cambia de redes wifi a red móvil y viceversa, perdiendo la conexión por unos segundos, pero retoma el requerimiento. De acuerdo con Rodríguez, Martín, Valenzuela y Chávez (2009):

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante.caja__7(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") De esta forma, distintas aplicaciones de software, desarrolladas en lenguajes de programación diferentes y ejecutadas sobre cualquier plataforma, pueden utilizar los #[em Web Service] para intercambiar información en redes de computadoras, como internet, evitando la pérdida total de la información y la conexión (p. 2).

    p.mt-5(data-aos="fade-up") En las figuras que se muestran, se invita a reconocer los elementos clave para el diseño de una base de datos móvil y los beneficios del uso de servidores web para las aplicaciones móviles.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 10] #[em Elementos clave para el diseño de una base de datos móvil]
    
    figure.mt-5.col-md-9.m-auto
      img.image_floating(src="@/assets/curso/tema7/2.svg" data-aos="fade-up")
    
    figcaption.mt-4(data-aos="fade-up") Nota. Tomada de https://www.semanticscholar.org/paper/A-Mobile-Database-Design-Methodology-for-Mobile-Yu-Sharma/41e3949c8aca76725184c740d782e79ca28efddc

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 11] #[em Webs Services]
    
    figure.mt-5.col-md-9.m-auto
      img.image_floating(src="@/assets/curso/tema7/3.svg" data-aos="fade-up")
    
    figcaption.mt-4(data-aos="fade-up") Nota. Tomada de https://diego.com.es/uploads/articulos/webservices.png

    p.mt-5(data-aos="fade-up") Se invita a dar clic sobre los términos que aquí se proponen y descubrir en ellos algunos otros beneficios y aspectos funcionales del uso de servicios web.

    AcordionA.mt-5(data-aos="fade-up" tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Alojamiento en servidor")
        .col-md-12
          p Una buena práctica es estructurar y diseñar la lógica de base de datos de la aplicación y alojarla en un servidor de aplicaciones accesible desde la web y comunicarse con ese servidor de aplicaciones, por medio de protocolos HTTP + JSON, SOAP, XML-RPC o similares, dependiendo del lenguaje y #[em frameware] que se está utilizando para el desarrollo. Esto hará mucho más eficiente el uso del ancho de banda y la aplicación será más tolerante a los problemas con la conectividad. También evitará exponer la base de datos directamente a internet.

      .row(titulo="SOAP - Simple Object Access Protocol")
        .col-md-12
          p SOAP es un protocolo escrito en XML para el intercambio de información entre aplicaciones. Es un formato para enviar mensajes, diseñado especialmente para servir de comunicación en Internet, pudiendo extender los HTTP #[em headers]. Es una forma de definir qué información se envía y cómo, mediante XML. Básicamente es un protocolo para acceder a un #[em Web Service] (Lázaro, 2018).

      .row(titulo="WSDL - Web Services Description Language")
        .col-md-12
          p WSDL es un lenguaje basado en XML para describir los servicios web y cómo acceder a ellos. Es el formato estándar para describir un #[em Web Service], y fue diseñado por #[em Microsoft] e IBM. WSDL es una parte integral del estándar UDDI y es el lenguaje que este utiliza (Lázaro, 2018).

      .row(titulo="UDDI - Universal Description, Discovery and Integration")
        .col-md-12
          p UDDI es un estándar XML para describir, publicar y encontrar servicios #[em web]. Es un directorio donde las compañías pueden registrar y buscar servicios #[em web]. Es un directorio de interfaces de servicios #[em web] descritos en WSDL que se comunican mediante SOAP (Lázaro, 2018).


</template>

<script>
export default {
  name: 'Tema7',
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
.bloque-texto-a.color-primario.caja__7
  background: url("../assets/curso/tema7/1.svg")
  background-size: contain
.bloque-texto-a:before
  left: 44% !important
</style>
