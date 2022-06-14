<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG03.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Recolección de Información y datos: metodologías

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2.mb-md-0.mb-4(data-aos="fade-right")
        p La recolección de información y de datos es el método por el cual se obtiene información deseada para su análisis cuantitativo y cualitativo, lo cual permite la toma de decisiones en los entornos personales y organizacionales. La obtención y análisis de información y datos se basa en métodos estadísticos.
        .BG01.p-2.mb-3
          h5.mb-0 La estadística
          p.mb-0 se desprende de las matemáticas, cuya finalidad es recopilar, ordenar y análisis datos, los cuales se analizan con la finalidad de comprobar hipótesis, o el comportamiento de las variables objeto de estudio.
        p Por ejemplo, se pueden estudiar comportamientos de los consumidores financieros, como la frecuencia con la cual solicitan préstamos de consumo o la variable ingresos promedio de una población objeto de estudio.        
      .col-lg-5.col-md-6.col-10.order-md-2.order-1.mb-md-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/img01.png')

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.BG08.p-2
        .h4.ms-3.mb-0.me-5 Metodologías
      .col-auto
        img.img01(src='@/assets/curso/tema1/img14.svg') 

  .container.BGIMG01.px-4.px-md-5
    p.mb-5 En la obtención de información, es indispensable implementar unas correctas técnicas o metodologías de recolección de información, que permitan a las entidades realizar una correcta planeación y ser eficaces en el momento en que se deban tomar decisiones. Para ello, reconozca el concepto de estadística, así: 

    .row.justify-content-center.mb-4
      .col-md-10.col-12(data-aos="fade-right")
         ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img04.svg')
          .tarjeta.BG02.p-3(x="49%" y="45%" numero="1")
            p <b>1</b>. La estadística permite la recolección de información y datos mediante diferentes metodologías y procedimientos, lo cual permite realizar un análisis correcto de la información y los datos recolectados. Se presentan dos ramas de la estadística: descriptiva e inferencial. 
          .tarjeta.BG02.p-3(x="90.4%" y="36.5%" numero="2")
            p <b>2</b>. La estadística descriptiva presenta la información recolectada de una forma organizada, mediante tablas y gráficos.
          .tarjeta.BG02.p-3(x="24.8%" y="49.5%" numero="3")
            p <b>3</b>. La estadística inferencial permite realizar predicciones y analizar datos.

    p.mb-5 La estadística descriptiva mide variables cuantitativas y cualitativas, las cuales tienen una medición mediante la tendencia central y la tendencia de variabilidad. La estadística inferencial mide variables aleatorias, para lo cual emplea, como métodos de medición y análisis, t-test, análisis de varianza, correlación y regresión.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 1
      span Metodología estadística

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.BG08.p-2
        .h4.ms-3.mb-0.me-5 Instrumentos
      .col-auto
        img.img01(src='@/assets/curso/tema1/img14.svg')   

    .row.mb-5 
      .col-md-11(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img06.svg')

    p A partir de la recolección de datos, se presenta un ejemplo por medio del cual se estudia el comportamiento de los préstamos a los consumidores de productos financieros de una entidad.
    p.mb-5 A continuación, se muestran los datos recolectados de un número de consumidores financieros a los cuales se le preguntó: ¿cuántos préstamos de consumo ha obtenido con la entidad financiera? A lo que ellos respondieron:

    .BGIMG02.p-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.mb-4.mx-4
          .col-md-5.col-11
            h5.text-center Tabla 1 
            h5.text-center No. de datos recolectados
            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th 
                    th
                    th
                    th
                    th
                tbody
                  tr
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 3
                    td(style="background-color: #fff; color: #000").text-center 4
                    td(style="background-color: #fff; color: #000").text-center 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center 4
                    td(style="background-color: #fff; color: #000").text-center 3
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 3
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 2
                  tr
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 3
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 2
        .row.justify-content-center.mb-4.mx-4
          .col-md-3.mb-md-0.mb-4
            p.mb-4 A continuación, se deben presentar los datos de una forma ordenada, que es una de las cualidades de la estadística descriptiva.
            h5 Tabla 2
            p Datos recolectados ordenados
          .col-md-4.mb-md-0.mb-4
            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th 
                    th
                    th
                    th
                    th
                tbody
                  tr
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center 1
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 2
                  tr
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 2
                    td(style="background-color: #fff; color: #000").text-center 3
                  tr
                    td(style="background-color: #fff; color: #000").text-center 3
                    td(style="background-color: #fff; color: #000").text-center 3
                    td(style="background-color: #fff; color: #000").text-center 3
                    td(style="background-color: #fff; color: #000").text-center 4
                    td(style="background-color: #fff; color: #000").text-center 4
          .col-md-3.p-0.mt-4.mb-md-0.mb-4
            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th Préstamos (x) 
                    th No. de personas (f)
                tbody
                  tr
                    td(style="background-color: #fff; color: #000").text-center.p-2 1
                    td(style="background-color: #fff; color: #000").text-center.p-2 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center.p-2 1
                    td(style="background-color: #fff; color: #000").text-center.p-2 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center.p-2 2
                    td(style="background-color: #fff; color: #000").text-center.p-2 2
                  tr
                    td(style="background-color: #fff; color: #000").text-center.p-2 2
                    td(style="background-color: #fff; color: #000").text-center.p-2 2
                  tr
                    td(style="background-color: #fff; color: #000").text-center.p-2 3
                    td(style="background-color: #fff; color: #000").text-center.p-2 4
        .row.justify-content-center.mb-4.mx-4
          .col-md-3.me-5.mb-md-0.mb-4
            p.mb-4 A partir de la información recolectada, se estiman las medidas de tendencia central y desviación estándar, con el uso de análisis de datos de Excel.
            h5 Tabla 3
            p Medidas de tendencia
          .col-md-6.mt-4
            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th(colspan="2") Medidas de tendencia Préstamos
                tbody
                  tr
                    td(style="background-color: #fff; color: #000").text-center Media
                    td(style="background-color: #fff; color: #000").text-center 1,88
                  tr
                    td(style="background-color: #fff; color: #000").text-center Error típico
                    td(style="background-color: #fff; color: #000").text-center 0,194250697
                  tr
                    td(style="background-color: #fff; color: #000").text-center Mediana
                    td(style="background-color: #fff; color: #000").text-center 2
                  tr
                    td(style="background-color: #fff; color: #000").text-center Moda
                    td(style="background-color: #fff; color: #000").text-center 1
                  tr
                    td(style="background-color: #fff; color: #000").text-center Desviación estándar
                    td(style="background-color: #fff; color: #000").text-center 0,971253486

  .container.BG04.p-4.p-md-5
    p.mb-2 A continuación, se analizan los datos:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-11.order-md-1.order-2.mb-md-0.mb-4(data-aos="fade-right")
        ol.lista-dollar
          li.mb-1
            .lista-dollar
            | <b>Media</b>: El promedio de los préstamos solicitados por los consumidores financieros es de 1,88
          li.mb-1
            .lista-dollar
            | <b>Mediana</b>: El 50% de los consumidores financieros ha solicitado entre 1 y 2 préstamos.
          li.mb-1
            .lista-dollar
            | <b>Moda</b>: El número de préstamos solicitados con más frecuencia por los consumidores es de 1.
          li.mb-1
            .lista-dollar
            | <b>Desviación</b>: El número de préstamos solicitados en promedio por los consumidores financieros es de 1,88, con una tendencia a variar, por encima o por debajo, de 0,97.
          li.mb-1
            .lista-dollar
            | <b>Rango</b>: El rango entre el número de préstamos solicitados por los consumidores es de 3, un valor mínimo de 1 y un valor máximo de 4.
      .col-lg-5.col-md-6.col-11.order-md-2.order-1.mb-md-0.mb-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img13.png')

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.BG08.p-2
        .h4.ms-3.mb-0.me-5.text-white Instrumentos
      .col-auto
        img.img01(src='@/assets/curso/tema1/img14.svg')   

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-md-5.col-11.mb-3.mb-md-0.mb-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img15.png')
      .col-lg-8.col-md-7.col-11(data-aos="fade-right")
        p En cuanto a la recolección de información y datos, se emplean diferentes técnicas e instrumentos, los cuales se dividen en dos grupos: recolección de datos de fuentes secundarias y recolección de datos de fuentes primarias.
        p En cuanto a los datos recolectados de fuentes secundarias, deben tomarse de fuentes confiables y verificables; esta información es recolectada y analizada por otros actores, y posteriormente, es publicada. Dentro de las fuentes secundarias, se encuentran:
        ol.lista-dollar.ps-4
          li.mb-1
            .lista-dollar
            | Datos históricos
          li.mb-1
            .lista-dollar
            | Informes del sector
          li.mb-1
            .lista-dollar
            | Datos recolectados por otros
          li.mb-1
            .lista-dollar
            | Informes del gobierno
          li.mb-1
            .lista-dollar
            | Revistas especializadas
          li.mb-1
            .lista-dollar
            | Investigaciones

    .row.align-items-center.justify-content-center.mb-5
      .col-md-4.col-11.mb-md-0.mb-4(data-aos="fade-right")
        p Estas fuentes son de gran valor, dan un panorama del entorno en el cual está inmersa la organización, los clientes, los proveedores, y otros actores que contribuyen para dar valor a las entidades.
        p En cuanto a la recolección de datos primarios, la organización es la encargada de recolectar la información y los datos, para posteriormente ser analizados empleando técnicas y métodos estadísticos que permiten realizar un correcto análisis de los mismos.
      .col-md-4.col-11.mb-md-0.mb-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img16.svg')
      .col-md-4.col-11.BG05.px-4.py-2(data-aos="fade-right")
        .row  
          .col-md-2.col-4.p-0.mb-md-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img17.svg') 
          .col-md-12
            p Como fuentes primarias de información, se encuentran la encuesta, los sondeos, los focus groups, la técnica Delphi, entre otros métodos que al interior de las organizaciones consideren pertinentes en el momento de recolectar datos e información. Observe a continuación en qué consiste cada uno de estos instrumentos. 
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 2
      span Instrumentos de recolección de información

    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
      table  
        thead
          tr
            th Encuesta
            th Focus Group
            th Sondeos
            th Técnica Delphi
        tbody
          tr
            td 
              p Recolección de datos mediante cuestionarios, con el objetivo de conocer información acerca de la población objetivo.
              p Estos datos pueden ser recolectados de forma presencial o por medios electrónicos.
            td Se recolectan datos  a partir de un grupo de personas menor a diez, quienes se reúnen a discutir alrededor de un problema. 
            td Se emplean directamente con el encuestado o el entrevistado, del cual se busca tener su opinión sobre un tema específico. 
            td Se realiza con expertos en el sector, quienes expresan sus conocimientos respecto a datos recolectados, puede ser, de fuentes secundarias.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2.p-0.mb-md-0.mb-4(data-aos="fade-right")
        p A continuación, se aborda la encuesta como técnica para la recolección de datos, para la cual, al momento de ser implementada, se debe definir el público objetivo a quien se va a dirigir la encuesta, el tema y los tipos de datos que se esperan recolectar.
        p Es de gran importancia realizar recolección de datos e información cualitativos y cuantitativos. En el momento de diseñar el cuestionario de la encuesta, estos datos deben estar incluidos; una vez diseñado el cuestionario, se debe estimar el número de personas a las que se va aplicar.
        .cajon.color-primario.py-3.px-4.mb-4
          p La muestra se estima bajo la siguiente fórmula <b>n = (Z²pqN) / (Ne² + Z²pq)</b>, donde:
          ol.lista-dollar2.ps-4
            li.mb-2
              .lista-dollar2
              | n: muestra.
            li.mb-2
              .lista-dollar2
              | N: población
            li.mb-2
              .lista-dollar2
              | Z: nivel de confianza
            li.mb-2
              .lista-dollar2
              | e: grado de error
            li.mb-2
              .lista-dollar2
              | p: probabilidad de ocurrencia
            li.mb-2
              .lista-dollar2
              | q: probabilidad de no ocurrencia
      .col-lg-5.col-md-6.col-11.order-md-2.order-1.p-4.mb-md-0.mb-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img19.png') 
    
    p.mb-5 Una vez diseñado el cuestionario y estimado el número de la muestra, se aplica la encuesta de manera presencial, medio telefónico o medios electrónicos; una vez recolectada la información, se analiza mediante métodos estadísticos.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
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
