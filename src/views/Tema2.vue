<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG03.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Centrales de riesgo: características y aplicación  

    p.mb-5 Las centrales de riesgo son entidades privadas que administran bases de datos que almacenan información respecto al comportamiento financiero de las personas o entidades. Cuando una persona o empresa solicita un préstamo, las entidades financieras consultan estas centrales de riesgo para verificar el comportamiento de los consumidores. Para ampliar detalles de estas entidades, observe:
  
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2mL_YgrzNPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    
  .container.BGIMG03.px-4.px-md-5
    .row.align-items-center.justify-content-center.mb-4
      .col-md-6.col-11.mb-md-0.mb-4(data-aos="fade-right")
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img02.svg')
      .col-md-6.col-11(data-aos="fade-left")
        .row.align-items-center.mb-5
          .col-auto.BG08.p-2
            .h4.ms-3.mb-0.me-5 Análisis
          .col-auto
            img.img01(src='@/assets/curso/tema1/img14.svg') 
        P De acuerdo con el comportamiento financiero de los consumidores, obtendrán un reporte positivo o negativo, el cual es analizado por las entidades financieras en el estudio de crédito; esta consulta permite identificar el nivel de riesgo que un cliente puede generar para la entidad.
        p Del nivel de riesgo depende si se otorga el préstamo y a qué tasa de interés, o si definitivamente no se otorga.
        p Las centrales de riesgo no evalúan el monto del crédito, evalúan el comportamiento del consumidor, el cual se encuentra en una escala de 150 a 950 puntos; en una escala mayor de la puntuación del consumidor, menor es el riesgo.
        .BG06.p-3
          p Las centrales de riesgo más consultadas son Datacrédito y CIFIN, las dos son entidades privadas, que se diferencian principalmente en que Datacrédito abarca más entidades, como las telecomunicaciones.
          p En cada una de estas plataformas, se puede verificar las entidades con las que el consumidor ha tenido relación y si su comportamiento es positivo o negativo.
    
    p.mb-5 En la siguiente ilustración, se puede observar que el usuario cuenta con cinco (5) cuentas abiertas, lo que significa que están activas y doce (12) cuentas cerradas, que están inactivas:
    
    .row.align-items-center.justify-content-center
      .col-md-10.col-12(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row.justify-content-center.p-4(numero="1" titulo="Historia créditos Datacrédito")
            .col-md-11.mb-md-0.mb-4
              p Se puede observar que, por cada cuenta activa o negativa, se indica si el comportamiento es positivo, negativo o no aplica, como en las cuentas de ahorro.
            .col-md-10
              figure
                img(src='@/assets/curso/tema2/img04.png')
          .row.justify-content-center.p-4(numero="2" titulo="Historial comportamiento Datacrédito")
            .col-md-10
              figure
                img(src='@/assets/curso/tema2/img05.png')

    separador

</template>

<script>
export default {
  name: 'Tema2',
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
