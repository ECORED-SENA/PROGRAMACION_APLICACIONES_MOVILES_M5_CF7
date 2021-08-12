<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-principal__info h1, .banner-principal__info p
  color: inherit !important
.curso-main-container > .container
  overflow-x: unset !important
.titulo-segundo:after
  border-left: solid 50px #FFCA28 !important
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0))
    transform: translatex(20px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0))
    transform: translatex(-10px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0))
.banner-principal__img img
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatex(20px)
  animation: float 6s cubic-bezier(0.4, 0.5, .6, .7) infinite
.glosario__letra-item__texto strong
  font-style: italic
</style>
