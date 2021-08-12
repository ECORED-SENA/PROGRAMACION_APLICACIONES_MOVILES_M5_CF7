<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Sistema gestor de base de datos (SGBD)

    p(data-aos="fade-up") Toda la información que circula en la red, la recibida y la que se envía, sale o se aloja en una base de datos. Internet no sería lo que se conoce sin las bases de datos que proporcionan la posibilidad de guardar la información.

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") Para lograr la creación, gestión y administración, de tan grande cantidad de información, se utilizan los denominados sistemas gestores de base de datos (SGBD), que evolucionan a medida que lo requiere la tecnología. Los SGBD definen la estructura para el almacenamiento y búsqueda de información, de la manera más eficiente posible.

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_1 2.1 #[em Data management system] DNMS

    p(data-aos="fade-up") Este se puede definir como un #[em software] que estructura y organiza la información, bajo un modelo de almacenamiento que cuenta con ciertas características particulares, al momento de almacenar configurar, administrar y utilizar la información.

    figure.mt-5.col-md-8.m-auto
      img.image_floating(data-aos="fade" src="@/assets/curso/tema2/2.svg")

    p.mt-5(data-aos="fade-up") #[strong Los siguientes cuatro elementos, engloban los requisitos más importantes de un sistema de administración de bases de datos (SGBD):]

    .row.mt-5.m-auto.col-md-10
      .col-lg-6(data-aos="fade-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/tema2/3.svg' alt='')
          .tarjeta.caja_flotante(style="background-color:#FFCA28;min-height:250px;")
            .p-4
              h4(data-aos="fade-up") Lectura y escritura
              p.mt-3(data-aos="fade-up") El sistema de gestión de la base de datos define permisos de lectura y escritura.

      .col-lg-6(data-aos="fade-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/tema2/4.svg' alt='')
          .tarjeta.caja_flotante_azul(style="background-color:#4DD0E1;min-height:250px;")
            .p-4
              h4(data-aos="fade-up") Interfaces y lenguaje
              p.mt-3(data-aos="fade-up") Estos procesos se definen por medio de las interfaces específicas de la aplicación y están determinados por el lenguaje de definición de datos correspondiente.

      .col-lg-6(data-aos="fade-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/tema2/5.svg' alt='')
          .tarjeta.caja_flotante_azul(style="background-color:#4DD0E1;min-height:250px;")
            .p-4
              h4(data-aos="fade-up") Lenguaje SQL
              p.mt-3(data-aos="fade-up") EEl más conocido usado y trabajado de estos lenguajes es SQL (#[em Structured Query Language]), que se define como un lenguaje de consulta estructurado.

      .col-lg-6(data-aos="fade-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/tema2/6.svg' alt='')
          .tarjeta.caja_flotante(style="background-color:#FFCA28;min-height:250px;")
            .p-4
              h4(data-aos="fade-up") Funciones y propiedades
              p.mt-3(data-aos="fade-up") Las funciones y propiedades de las transacciones de un DBMS (sistema administrador de bases de datos) son: Atomicidad (#[em atomicity]), consistencia (#[em consistency]), aislamiento (#[em isolation]) y permanencia (#[em durability]).

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_2 2.2 Componentes de un SGBD

    .cajon.color-primario.p-5.mt-5.caja_flotante_azul(style="background-color: #DBFBFF;")
      p(data-aos="fade-up") Un sistema de gestión de base de datos consta de varios componentes, todos los cuales contribuyen al buen funcionamiento del #[em software]. Los elementos básicos que lo conforman son tres: #[strong 1) el diccionario de datos, 2) el lenguaje de definición de datos y 3) el lenguaje de manipulación de datos.]

    figure
      img.image_floating(src="@/assets/curso/tema2/7.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") En la tabla 1 se muestran los componentes que necesita manejar una base de datos para una aplicación móvil; se sigue la misma estructura que se utiliza en las páginas #[em web].

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 1] #[em Componentes de un SGBD]

    .tabla-a.color-acento-botones.mt-5(data-aos="fade-up")
      table.tabla__1
        thead(style="border-top:0px;")
          tr
            th.h5(style="border-right: 1px #bababa solid;background-color:#FFCA28") Componentes
            th.h5(style="background-color:#FFCA28") Manejo
        tbody
          tr(style="background-color:#F6F6F6")
            td(style="border-right: 1px #bababa solid;") Diccionario de datos
            td El diccionario de datos suministra las características y toda la información importante sobre los datos almacenados. Sin importar su diversidad, también notifica los permisos de uso de cada registro.
          tr
            td(style="border-right: 1px #bababa solid;") Lenguaje de definición de datos
            td Utiliza un DDL (#[em Data Definition Language]) que estructura el contenido de la base de datos; por medio de este lenguaje se puede crear, modificar y eliminar. 
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Lenguaje de manipulación de datos
            td Utiliza un DML (#[em Data Manipulation Language]), que permite registrar, eliminar, modificar, comprimir y extraer datos.
    br
    br
    .titulo-segundo.mt-5
      h2#t_2_3 2.3. Propiedad de un SGBD

    p(data-aos="fade-up") Por lo general, todas las aplicaciones móviles cuentan con una base de datos que puede ser pequeña y simple o muy grande y robusta; pero, por más pequeña que esta sea, debe contar con ciertas tareas, funciones y propiedades que harán de la base de datos un elemento aportante al buen desempeño de la aplicación (Silberschatz, Korth y Sudarshan, 2006).

    p.mt-3(data-aos="fade-up") En la tabla 2 se indican tales propiedades y la manera como estas logran cualificar el sistema de administración de bases de datos.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 2] #[em Propiedades de un SGBD]

    .tabla-a.color-acento-botones.mt-5(data-aos="fade-up")
      table.tabla__1
        thead(style="border-top:0px;")
          tr
            th.h5(style="border-right: 1px #bababa solid;background-color:#FFCA28") Propiedades
            th.h5(style="background-color:#FFCA28") Tareas y funciones
        tbody
          tr(style="background-color:#F6F6F6")
            td(style="border-right: 1px #bababa solid;") Almacenamiento de datos
            td Se debe permitir el almacenamiento de datos en varios formatos como texto, documentos, contraseñas, imágenes, estos también se deben poder consultar.
          tr
            td(style="border-right: 1px #bababa solid;") Edición de datos
            td Los elementos almacenados se deben poder modificar y editar directamente. 
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Eliminación de datos
            td Se pueden eliminar los datos almacenados y editados solo por los perfiles de usuario que permiten esta actividad.
          tr
            td(style="border-right: 1px #bababa solid;") Administración de metadatos
            td Crear, leer, actualizar, borrar. Realizar el CRUD organizando y facilitando la función de búsqueda.
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Seguridad de los datos
            td Evitar el acceso a los datos de individuos no autorizadas y mantener la seguridad de los datos implementando un método de cifrado eficaz para evitar que los datos se pierdan o sean manipulados.
          tr
            td(style="border-right: 1px #bababa solid;") Integridad de los datos
            td En las bases de datos relacionales se utilizan cuatro conceptos para mantener la integridad y coherencia de los datos: integridad de dominio, integridad de entidad, integridad referencial y coherencia lógica.
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Modo multiusuario
            td Permitir el ingreso de varios o muchos usuarios a la vez y lograr mantener la seguridad de los datos, la coherencia y no afectar el rendimiento de la aplicación.
          tr
            td(style="border-right: 1px #bababa solid;") Optimización de consulta
            td La lógica y la estructura de la base de datos deben garantizar el buen funcionamiento y la optimización de recursos. 
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") #[em Triggers y Stored procedures]
            td Son procedimientos que se encargan de activar automáticamente (#[em trigger]) como respuesta a algunas acciones.

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_4 2.4 Tipos de SGBD utilizados en apps móviles

    p(data-aos="fade-up") El principal objetivo de la instalación de un sistema gestor de base de datos es desarrollar y administrar la información de la base de datos, de la mejor manera posible. Existen diferentes modelos que se diferencian, fundamentalmente, en la manera en la cual está almacenada y es consultada la información. Por lo tanto, decidirse por un DBMS ha de estar más ligado al tipo de aplicación que se quiere desarrollar y la manera en que se deban almacenar y consultar los datos dentro de la aplicación; para ello, conocer los modelos de datos y sus características, permitirá saber, de forma sencilla, cuál es la opción más adecuada para implementar. 

    p.mt-3(data-aos="fade-up") #[strong A continuación, se muestran los tipos de sistemas de administración de bases de datos más utilizados y sus principales características y funcionalidades.]

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 3] #[em Tipos de SGBD]

    .tabla-a.color-acento-botones.mt-5(data-aos="fade-up")
      table.tabla__1
        thead(style="border-top:0px;")
          tr
            th.h5(style="border-right: 1px #bababa solid;background-color:#FFCA28") Tipo de SGBD
            th.h5(style="background-color:#FFCA28;border-right: 1px #bababa solid;") Características y funcionalidades
            th.h5(style="background-color:#FFCA28") Ejemplos

        tbody
          tr(style="background-color:#F6F6F6")
            td(style="border-right: 1px #bababa solid;") Relacional
            td(style="border-right: 1px #bababa solid;") El más común y popular. #[br] Los datos se estructuran en filas de tabla. #[br] La posibilidad de crear diferentes relaciones entre las filas y presentarlas en columnas.#[br] Una tabla puede tener muchos registros y cada registro puede tener muchos campos.#[br] Utiliza el lenguaje SQL.#[br] SQL se utiliza en, prácticamente, todas las bases de datos relacionales. #[br] Esto permite una mayor seguridad e integración con otras bases de datos.
            td Microsoft Access. #[br] Microsoft SQL Server.#[br] MySQL.#[br] Db2 de IBM.#[br] Oracle Database.#[br] IBM Informix.#[br] MariaDB.#[br] Sybase ASE.#[br] Firebird.
          tr
            td(style="border-right: 1px #bababa solid;") Jerárquica
            td(style="border-right: 1px #bababa solid;") Es similar a la estructura de un árbol, es muy similar a la estructura de Microsoft Windows organiza las carpetas y archivos. #[br] El enlace es anidado conservando los datos organizados en un orden particular en un mismo nivel de lista. #[br] Esto reduce el requerimiento de memoria y también aumenta la eficiencia.
            td IMS de IBM.
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") De red
            td(style="border-right: 1px #bababa solid;") En un modelo de red, la característica determinante es que almacena un registro con un enlace a otros registros formando una red.#[br] Los componentes de una base de datos de red pueden tener varias relaciones padre-hijo. #[br] Dado que siempre hay un vínculo entre un padre y un hijo, se mantiene la integridad de los datos.
            td PostgreSQL. #[br] InterSystems Caché. #[br] InterSystems IRIS.
          tr
            td(style="border-right: 1px #bababa solid;") Orientada a objetos
            td(style="border-right: 1px #bababa solid;") Utiliza el concepto de la herencia: esto representa que los objetos pueden transferir algunos de sus atributos a otros objetos, lo que se regula a través del SGBD.
            td PostgreSQL. #[br] InterSystems Caché (combina relacional y orientado a objetos). #[br] InterSystems IRIS (combina relacional y orientado a objetos).
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Orientada a documentos
            td(style="border-right: 1px #bababa solid;") Almacena los registros de datos en diferentes documentos.
            td OrientDB. #[br] CouchDB. #[br] MongoDB.
          tr
            td(style="border-right: 1px #bababa solid;") El modelo de base de datos plana
            td(style="border-right: 1px #bababa solid;") En un modelo de base de datos plano, hay dos dimensiones. #[br] Todos los registros se almacenan en un solo lugar.  #[br] Funciona bien para bases de datos pequeñas y tiene requisitos mínimos de software y hardware.
            td Excel.



</template>

<script>
export default {
  name: 'Tema2',
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
  background: url("../assets/curso/tema2/1.svg")
  background-size: contain
.bloque-texto-a:before
  left: 44% !important
.tabla__1 td,.tabla__1 th
  border: 0
</style>
