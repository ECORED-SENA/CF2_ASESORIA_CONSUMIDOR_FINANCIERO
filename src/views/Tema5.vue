<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG03.px-4.px-md-5.pt-4
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 5
      h1 Propuesta comercial

    p El asesor al consumidor financiero se encuentra en la capacidad de ofrecer al consumidor financiero una propuesta comercial, la cual inicia su construcción a partir de la recolección de datos e información y el uso de unas adecuadas técnicas de comunicación, donde el asesor identifica cuáles son las necesidades a satisfacer o las expectativas que tiene el consumidor. Observe a continuación:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p El asesor también deberá dar a conocer las ventajas o desventajas para el consumidor al adquirir un producto financiero, deberá brindar una explicación de cómo funciona el dinero y las finanzas y cómo estas decisiones pueden beneficiar o afectar las finanzas del consumidor.

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1.	Costos de producción
    

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2(data-aos="fade-right")
        p Dentro de las organizaciones, es indispensable tener presente la estructura de costos de producción, la cual permite determinar los recursos necesarios para la producción de un producto o la prestación de servicios; de estos costos, se encarga la contabilidad de costos.
        p Se deben diferenciar los costos de los gastos; si bien los dos representan una salida de dinero para las organizaciones, los costos están directamente relacionados con la producción o la prestación del servicio, y los gastos hacen parte de las salidas de dinero diferentes a la producción o prestación de servicios.
        p En la estructura de costos se identifican los costos directos e indirectos; en cuanto a los costos directos, son los que directamente están relacionados con el producto o servicio, por ejemplo, las materias primas en la fabricación de productos o la mano de obra calificada en la prestación de un servicio.
      .col-lg-5.col-md-6.col-10.order-md-2.order-1(data-aos="zoom-in")
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img01.png')

    figure.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/tema5/img02.svg')

  .container.BGIMG05.px-4.px-md-5.pt-5
    .row.justify-content-center.mb-5
      .col-md-7.col-11.mb-5(data-aos="fade-right")
        p Estos costos permiten identificar la cantidad de unidades de producto a fabricar o servicios a ofrecer para alcanzar el punto de equilibrio, por lo cual, la fórmula de costos totales es:
        ol.lista-dollar
          li.mb-1
            .lista-dollar
            | CT: CV+CF donde CT: costos totales
          li.mb-1
            .lista-dollar
            | CV: costos variables
          li.mb-1
            .lista-dollar
            | CF: costos fijos 
        p Para determinar el costo por unidad, el cual se conoce como costo medio o costo unitario, se estima CTme: CT/Q, donde:
        ol.lista-dollar
          li.mb-1
            .lista-dollar
            | CTme: costo total medio
          li.mb-1
            .lista-dollar
            | CT: costo total
          li.mb-1
            .lista-dollar
            | Q: unidades 
      .col-md-5.col-11.mb-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img03.png')
      .col-md-5.col-11.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img04.png')
      .col-md-7.col-11.mb-5(data-aos="fade-left")
        p Dentro de los costos, también se estima el costo marginal, que es el costo por una unidad adicional a producir, el cual se estima así:
        ol.lista-dollar
          li.mb-1
            .lista-dollar
            | CM: dCT/dQ, donde CM: costo marginal
          li.mb-1
            .lista-dollar
            | dCT: derivada de costo total
          li.mb-1
            .lista-dollar
            | dCT: derivada de unidades o cantidad 
        p En el análisis de costos, se debe estimar el punto de equilibrio, el cual indica las unidades a vender para lograr cubrir los costos totales; se representa con la siguiente fórmula:
        ol.lista-dollar
          li.mb-1
            .lista-dollar
            | PE: (Costo fijo)/(PV-Costo variable unitario)

    .row.justify-content-center.mb-4
      .col-md-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 8
          span Punto de equilibrio
        
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img05.svg')
          figcaption Tomado de Algarra (2013).

  .container.BG03.px-4.px-md-5.pt-4
    .row.justify-content-center.mb-4
      .col-md-7.mx-0.BG01.p-5.px-4.mb-4
        p Para estimar el precio de venta, se emplea la siguiente fórmula:
        ol.lista-dollar
          li.mb-1
            .lista-dollar
            | PV: CTme/(1 - % Utilidad), donde PV: Precio de venta
          li.mb-1
            .lista-dollar
            | CTme: Costo total medio
          li.mb-1
            .lista-dollar
            | % Utilidad: Porcentaje deseado de utilida d
      .col-md-5.px-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img06.jpg')
    
    p La empresa Andina S.A fabrica pan tajado, el cual tiene la siguiente estructura de costos: 

    .tabla-a.color-acento-contenido.mb-0
      table  
        thead
          tr
            th.text-center Encuesta
            th.text-center Focus Group
        tbody
          tr
            td Harina de trigo
            td $13.000.000
            td Arrendamiento 
            td $2.500.000
          tr
            td Mantequilla
            td $6.000.000
            td Mano de obra indirecta
            td $3.000.000
          tr
            td Levadura
            td $1.500.000
            td Servicios públicos
            td $700.000
          tr
            td Sal 
            td $700.000
            td Personal de vigilancia 
            td $1.500.000
          tr
            td Bolsa de empacado
            td $1.900.00
            td 
            td 
          tr
            td Mano de obra directa
            td $5.000.000 
            td 
            td 

    p La empresa Andina S.A espera una utilidad del 15 % por unidad de producto. Para el mes de enero, fabricó 5.100 bolsas de pan tajado. 

  .container.BGIMG05.px-4.px-md-5.pt-5
    .row.justify-content-center.mb-5
      .col-md-5.col-11.mb-5.px-0(data-aos="fade-right")   
        img(src='@/assets/curso/tema5/img07.png')
      .col-md-7.col-11.mb-5.px-0
        .cajon.color-primario.p-4.mb-4
          p Con los datos anteriores, se obtienen unos costos totales de $ 33.900.000
          ol.lista-dollar
            li.mb-1
              .lista-dollar
              | CT: CV + CF
            li.mb-1
              .lista-dollar
              | CT: $ 26.200.000 + $ 7.700.000
            li.mb-1
              .lista-dollar
              | CT: $ 33.900.000
          p Para continuar con el ejemplo, se debe estimar el precio de venta, el cual es:
          ol.lista-dollar
            li.mb-1
              .lista-dollar
              | PV: CTme/(1 - % Utilidad)
            li.mb-1
              .lista-dollar
              | PV: ($ 5.100)/(1 - 15 %)
            li.mb-1
              .lista-dollar
              | PV: $6.000
          p Ahora, se estima el punto de equilibrio, el cual indica el número de productos a vender para cubrir los costos totales de la empresa Andina S.A .
          ol.lista-dollar
            li.mb-1
              .lista-dollar
              | PE: (Costo fijo) / (PV - Costo variable unitario)
            li.mb-1
              .lista-dollar
              | PE: ($ 7.700.000) / ($6.000 - $5.137)
            li.mb-1
              .lista-dollar
              | PE: 8.925 unidades
    p Con el análisis anterior, se puede decir que la empresa tiene problemas de costos, debido a que solo produce 5.100 unidades de pan y, para cubrir los costos totales, requiere producir 8.925 unidades.

    separador
  .container.BG03.px-4.px-md-5.pt-4
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2.	Educación financiera 

    .row.mb-4
      .col-md-7.col-11.mb-5(data-aos="fade-right")
        p La educación financiera se extiende a todas las etapas de la vida, con ella se pretende que las personas adquieran habilidades y destrezas en los conceptos básicos del dinero o las finanzas personales; se habla de todas las etapas de la vida debido a que se debe empezar a emplear este concepto desde la niñez.
        p Lo que pretende la educación financiera es enseñar a las personas a tener un adecuado manejo del dinero, para lo cual debe emplear conceptos básicos como:
        ol.lista-dollar
          li.mb-1
            .lista-dollar
            | Generar ingresos
          li.mb-1
            .lista-dollar
            | Manejo del presupuesto 
          li.mb-1
            .lista-dollar
            | Ahorrar
          li.mb-1
            .lista-dollar
            | Invertir
          li.mb-1
            .lista-dollar
            | Apalancamiento financiero
      .col-md-5.col-11.mb-5
        figure(data-aos="fade-left") 
          img(src='@/assets/curso/tema5/img08.png') 

    .row.mb-4
      .col-md-3.col-6.mb-5(data-aos="fade-right")
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/tema5/img09.png')
      .col-md-9.col-10.mb-5
        p Las finanzas personales o la educación financiera buscan que las personas integren estos conceptos y los empleen conscientemente a su favor, lo que les permitirá hacer un uso adecuado del dinero y no verse en dificultades financieras, como la falta de liquidez o el endeudamiento.
        p Para iniciar con un plan de educación financiera para el entorno personal, se deben identificar las fuentes de ingresos, las cuales pueden ser de un ingreso laboral, una mesada pensional, ingresos por capital, entre otros. Es de vital importancia que a los más pequeños se les enseñe las formas adecuadas de generar estos ingresos.
        p Una vez identificadas las fuentes de ingresos, se debe elaborar un presupuesto, en el cual se plasman cuáles son los ingresos que se perciben por las diferentes actividades y cuáles son las erogaciones o salidas de dinero. 
    p Se sugiere que el presupuesto esté conformado de la siguiente manera:

  .container.BGIMG05.px-4.px-md-5.pt-5
    .row.mb-4
      .col-md-8.col-11.mb-5(data-aos="fade-right")
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/tema5/img10.png')

  .container.BG03.px-4.px-md-5.pt-4
    .row.mb-4
      .col-md-10.col-12.mb-5
        p En cuanto al apalancamiento financiero, se debe tener en cuenta, principalmente, para realizar inversiones que generen ingresos o beneficios mayores a los de la tasa de interés; se debe evitar adquirir préstamos de consumo, los cuales traen satisfacciones personales, pero en el futuro pueden traer problemas de liquidez o sobreendeudamiento.
        p Finalmente, se invita al aprendiz a analizar el siguiente video de educación financiera, del docente Nicolás González, Contador Público y Especialista en Gestión de Negocios con orientación en Finanzas, docente del área financiera de la Universidad Nacional de Mar del Plata.
      .col-md-2.col-4.mb-5(data-aos="fade-right")
        figure(data-aos="fade-right") 
          img(src='@/assets/curso/tema5/img09.png')

    .row.justify-content-center.mb-5
      .col-md-10.col-11
        .row.align-items-center.justify-content-center.BGIMG04.p-3
          .col-1.p-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema3/img04.svg')
          .col-8.mb-2
            h4.text-white TED. (18 de noviembre 2020).
            p.text-white Educación financiera para toda la vida | Nicolas Gonzalez | TEDxMarDelPlata
          .col-2
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=5PAIPVjGMt4" target="_blank")
              span Descargar
              i.fas.fa-file-download    

</template>

<script>
export default {
  name: 'Tema5',
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
