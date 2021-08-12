<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1  Gestores de bases de datos para apps móviles y relacionales

    p(data-aos="fade-up") Los gestores de bases de datos se dividen según la manera en que se administran los datos. En la actualidad existen dos modelos: las relacionales (SQL) y las no relacionales (NoSQL). En este punto, se enfocará la mirada hacia los gestores de bases de datos relacionales (SQL). Este modelo se caracteriza por establecer vínculos y relaciones entre los datos, utilizando una tabla integradora por cada relación existente con sus propios registros y atributos.

    p.mt-4(data-aos="fade-up") #[strong En la figura 2 se muestra un ejemplo de arquitectura del modelo relacional.]

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 2]   #[em Ejemplo de arquitectura utilizando Azure y PosgreSQL]

    figure.mt-5.m-auto.col-md-10
      img.image_floating(src="@/assets/curso/tema3/1.svg" data-aos="fade-up")

    .col-md-8
      figcaption.mt-5(data-aos="fade-up") Nota. Tomada de Microsoft (2021).

    p.mt-5(data-aos="fade-up") A continuación, se indican algunos de los sistemas de administración de bases de datos más utilizados, del modelo relacional.

    AcordionA.mt-5(data-aos="fade-up" tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="MySQL")
        .col-md-12
          p Es un SGBD multihilo y multiusuario, de uso libre, siendo el más utilizado en el desarrollo de páginas web y aplicaciones móviles. Se entrega bajo la licencia GNU GPL.
      .row(titulo="MariaDB")
        .col-md-12
          p Es una consecuencia de MySQL. Está compuesto por varias extensiones su entorno gráfico de desarrollo, es amigable. Se deriva a partir de la compra de MySQL por Oracle para seguir la filosofía del #[em open source], es totalmente compatible con MySQL. Algunas de sus principales características son el aumento de motores de almacenamiento, la gran escalabilidad y la buena seguridad y rapidez en transacciones. Cuenta con las nuevas extensiones que permiten el trabajo y desarrollo de aplicación para bases de datos NoSQL.

      .row(titulo="SQLite")
        .col-md-12
          p SQLite es una biblioteca escrita en C que implementa un SGBD y que permite transacciones sin necesidad de un servidor ni configuraciones; es muy utilizada en la creación y gestión de pequeñas bases de datos locales; además, es útil para las aplicaciones móviles que no requieren conexión a servidores remotos y maneja un pequeño flujo de datos local.

      .row(titulo="Principales características")
        .col-md-12
          p Una de sus principales características es su tamaño reducido; al tratarse de una biblioteca no requiere de muchos recursos como sí lo hace un SGBD, a pesar de su tamaño reducido es de gran estabilidad pues está diseñado sobre los principios de ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad), su desventaja es que no soporta bases de datos muy grandes. 

      .row(titulo="Microsoft SQL Server")
        .col-md-12
          p Es un gestor de base de datos relacionales que utiliza el lenguaje Transact-SQL. Una de sus grandes características es que brinda la posibilidad de manejar gran cantidad de información y usuarios, generando un flujo fuerte y constante, que soporta sin inconvenientes. Está soportado, solamente, por Microsoft. Presenta una excelente seguridad, estabilidad y escalabilidad, cuenta con la opción de realizar la cancelación de consultas, también cuenta con un excelente entorno gráfico que facilita su administración, utiliza y se centra sobre los comandos DDL y DML. Como todos los productos de Microsoft cuenta con una versión #[em Express], pero presenta grandes limitantes si se requiere una versión completa: se debe pagar un alto precio por su uso completo Standard, Developer, Enterprise o SQL Azure, la versión de SQL Server en la nube.

      .row(titulo="Oracle")
        .col-md-12
          p Oracle es el SGBD más utilizado en el ámbito empresarial y su recorrido y evolución le posicionan como uno de los mejores en el mercado; se destaca por su gran soporte de transacciones, su estabilidad y escalabilidad, su soporte multiplataforma. Su gran inconveniente o desventaja es que cuenta con una versión gratuita: #[em Edition Express], que proporciona ciertas características, pero muchas limitaciones.

      .row(titulo="PostgreSQL")
        .col-md-12
          p Es, en la actualidad, uno de los gestores de base de datos relacional más usados en el mercado, tiene licencia BSD y es de uso libre; además, presenta grandes ventajas para los desarrolladores de aplicaciones móviles y administradores de bases de datos. Presenta un control de concurrencias multiversión (MVCC) y flexibilidad en cuanto a lenguajes de programación y ofrece una excelente estabilidad, robustez y eficiencia en todos los procesos principales con bases de datos robustas. Su principal falencia es, aunque no parezca lógico, la lentitud para realizar la administración de bases de datos pequeñas: este gestor no se debe tener en cuenta, o tomar como una opción, cuando la aplicación desarrollada utiliza una base de datos con poca información y bajo flujo de datos; se subutilizará la herramienta y no se tendrán buenos resultados. Dispone de una herramienta de administración muy fácil e intuitiva para la gestión de las bases de datos.





</template>

<script>
export default {
  name: 'Tema3',
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
