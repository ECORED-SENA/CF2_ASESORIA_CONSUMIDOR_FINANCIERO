<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG03.px-4.px-md-5.pt-4
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 4
      h1 Riesgo

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2(data-aos="fade-right")
        p El riesgo hace referencia a la posibilidad de que un evento no deseado ocurra; los riesgos en el sector financiero obedecen a la incertidumbre de que los mercados presenten fallos, las inversiones no generen la rentabilidad esperada, los préstamos no sean cancelados, entre otros; por lo cual, estos riesgos deben ser contemplados en la etapa de planeación, como también se debe realizar un seguimiento periódico.
        p La gestión que se realiza al interior de las organizaciones para mitigar el riesgo se conoce como <em>sistema de administración del riesgo</em>.
      .col-lg-5.col-md-6.col-10.order-md-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema4/img01.svg')

    .row
      .col-md-3.col-5.mb-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img02.svg')

    p.mb-5 En cuanto a los riesgos del mercado financiero, se encuentran:  

    .row.justify-content-center
      .col-md-10.col-11
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 6
          span Tipo de riesgos

  .container.BGIMG05.px-4.px-md-5.pt-5   
    .row.justify-content-center.mb-5
      .col-md-3.col-6
        figure.p-0
          img(src='@/assets/curso/tema4/img03.svg')
        .BG07.p-4
          p <b>Riesgo crediticio:</b> cuando no se asume el pago  de una obligación o se recibe con retraso. 
      .col-md-3.col-6
        figure.p-0
          img(src='@/assets/curso/tema4/img04.svg')
        .BG07.p-4
          p <b>Riesgo de liquidez:</b> cuando el acreedor posee activos, pero los activos corrientes no generan la suficiente liquidez para el pago de sus obligaciones.
      .col-md-3.col-6
        figure.p-0
          img(src='@/assets/curso/tema4/img05.svg')
        .BG07.p-4
          p <b>Riesgo de mercado:</b> son los riesgos asociados al mercado, como el riesgo cambiario o el riesgo de la tasa de interés.
      .col-md-3.col-6
        figure.p-0
          img(src='@/assets/curso/tema4/img06.svg')
        .BG07.p-4
          p <b>Riesgo operacional:</b> son los inherentes al ejercicio diario de las organizaciones dentro de su funcionamiento y actividad económica.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1.	Gestión del riesgo

  .container.BG06.p-4.p-md-5
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2(data-aos="fade-right")
        p La gestión del riesgo o sistema de administración del riesgo permite realizar una adecuada gestión de los riesgos inherentes a la operación de las organizaciones.
        p La implementación de la gestión del riesgo permite identificar, medir, controlar y evaluar los posibles riesgos que pueden afectar la operación de las organizaciones; con una correcta identificación de un posible evento no deseado, se puede inferir la probabilidad de que este evento ocurra, y en el caso de que ocurra, cómo se mitiga, para que no afecte el correcto funcionamiento de las organizaciones.
        .BG05.p-3.mb-3
          p El sistema de gestión de riesgo se desarrolla bajo el esquema GRC <em>(Governance, Risk Management and Compliance) y ERM (Enterprise Risk Management).</em>
        p El esquema GRC se aplica a través de tres perspectivas: gobernanza, administración del riesgo y cumplimiento; y el esquema ERM se aplica a través de la gestión del riesgo; estas dos líneas buscan la consecución de los objetivos de las organizaciones, sin embargo, la ERM se centra solo en la gestión de los riesgos.
      .col-lg-5.col-md-6.col-10.order-md-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema4/img07.png')

    p.mb-5 La norma internacional ISO 31000 se basa en la gestión del riesgo, para ser implementada en las organizaciones, independientemente del sector económico en el que se desempeñan. La norma ISO 31000 se basa en los siguientes principios de gestión :

  .container.BGIMG05.px-4.px-md-5.pt-5   
    .row.justify-content-center.mb-5
      .col-md-8.col-10
        figure.p-0
          img(src='@/assets/curso/tema4/img08.svg')

  .container.BG04.p-4.p-md-5
    p.mb-5 Para profundizar en los principios de gestión:


</template>

<script>
export default {
  name: 'Tema3',
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
