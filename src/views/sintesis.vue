<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.BG03.px-4.px-md-5.pt-4

    p Síntesis del componente formativo Asesoría al consumidor financiero.
  
  .container.BGIMG05.px-4.px-md-5.pt-5 

    .row.justify-content-center
      .col-lg-6.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
