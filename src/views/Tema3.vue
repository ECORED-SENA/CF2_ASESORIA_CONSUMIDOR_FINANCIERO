<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG03.px-4.px-md-5.pt-4
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 3
      h1 Análisis financiero

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.col-md-6.col-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img01.png') 
      .col-lg-7.col-md-6.col-10(data-aos="fade-right")
        p El análisis financiero se encarga de realizar análisis de la información contable de una persona o de una entidad, mediante indicadores y razones financieras, los cuales permiten identificar la situación y desempeño económico de las organizaciones.
        .BG01.p-2.mb-3          
          p.mb-0 La contabilidad es base fundamental para realizar los análisis financieros; es de vital importancia que cada organización esté verificando los indicadores y las razones financieras, para estar enterados del comportamiento económico y financiero de sus organizaciones; de nada sirve tener una información contable que no es analizada.
        p Los análisis financieros permiten a las organizaciones tomar decisiones financieras sobre cada una de sus organizaciones, a partir del diagnóstico realizado con los análisis financieros, y realizar seguimiento y control sobre la organización. 
      
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1.	Principios de contabilidad 

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2(data-aos="fade-right")
        p Todas las personas y las organizaciones deben llevar registrada su información financiera y económica, lo cual permite contar con un control de sus actividades económicas.
        .bloque-texto-c.color-secundario.px-4.py-2.mb-2
          i.fas.fa-quote-left
          p La contabilidad es una técnica que produce sistemática y estructuralmente información cuantitativa expresada en unidades monetarias, sobre los eventos económicos identificables y cuantificables que realiza una entidad a través de un proceso de captación de las operaciones que cronológicamente mida, clasifique, registre y resuma con claridad.           
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                i.fas.fa-quote-right
                .h5.me-5 (Moreno, 2014)
        p El registro de la información financiera y económica empleando la contabilidad es de gran utilidad para las entidades, debido a que permite analizar e identificar la situación económica, la cual, a su vez, permite la toma de decisiones. El registro de esta información también permite el seguimiento y control de la entidad.
      .col-lg-5.col-md-6.col-10.order-md-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img02.png')

    p.mb-5 Los registros contables o libros contables permiten el registro contable de todas las actividades económicas y financieras de las entidades.

    .row.justify-content-center.mb-5
      .col-md-10.col-11
        .row.align-items-center.justify-content-center.BGIMG04.p-3
          .col-1.p-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema3/img04.svg')
          .col-8.mb-2
            h4.text-white Código de Comercio, artículos 45 y 48 
          .col-2
            a.boton.color-acento-botones(href="https://www.camarabaq.org.co/wp-content/uploads/2021/03/CodigodeComercio-2.pdf" target="_blank")
              span Descargar
              i.fas.fa-file-download
    
    p Los libros contables deben registrar todas las operaciones en un orden cronológico y con el valor monetario, en idioma castellano, por sistema de partida doble.
    p Los libros de contabilidad, para efectos fiscales, se dividen en libros principales y libros auxiliares, de acuerdo con el Artículo 49 del Código de Comercio. Dentro de los libros principales, se encuentran:

  .container.BGIMG05.px-4.px-md-5.pt-5
    .row.justify-content-center.mb-5
      .col-md-10.col-11.mb-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img06.svg')
      .col-md-8.col-9(data-aos="fade-right")
        .cajon.color-acento-contenido.py-3.px-4.mb-4
          .row.align-items-center.justify-content-center
            .col-md-8
              p En cuanto a los libros auxiliares, se encuentran:
              ol.lista-dollar
                li.mb-1
                  .lista-dollar
                  | Libro de bancos
                li.mb-1
                  .lista-dollar
                  | Libro de caja 
                li.mb-1
                  .lista-dollar
                  | Libros de clientes
            .col-md-3
              figure
                img(src='@/assets/curso/tema3/img07.svg')
    
  .container.BG04.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-md-10.col-11
        .row.align-items-center.justify-content-center.BGIMG04.p-3
          .col-1.p-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img04.svg')
          .col-8.mb-2
            h4.text-white El Código de Comercio, en su Artículo 57, establece las prohibiciones sobre los libros de comercio. Para ampliar sobre los elementos que se prohíben, observe:
          .col-2
            a.boton.color-acento-botones(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html" target="_blank")
              span Descargar
              i.fas.fa-file-download  
    p.mb-5 Las cuentas T en contabilidad representan el registro de los movimientos contables, el cual consta del débito y del haber; en el momento en que se realiza el registro, se deben diligenciar el código y el nombre de la cuenta.

    .row.justify-content-center.mb-5
      .col-md-8.col-10.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          span Cuenta T
      .col-md-8.col-10
        figure
          img(src='@/assets/curso/tema3/img08.svg')
    
    p.mb-5 Por ejemplo, la empresa Andina S.A. vende mercancía por un valor de $2.000.000, de la cual se realiza pago en efectivo por valor de $1.200.000 y el saldo a crédito por 30 días. Al registrar en las cuentas T, se tiene:  

    .row.justify-content-center.mb-5
      .col-md-4(data-aos="fade-right")
        table(style="border-top: 1px solid #59C447") 
          thead
            tr.text-center(style="background-color: #E8E8E8")
              <th colspan="2">4135 Comercio al por mayor y al por menor</th>
          tbody
            tr.text-center
              td Debe
              td Haber
            tr
              td 
              td.text-center $2.000.000
      .col-md-4
        table(style="border-top: 1px solid #59C447") 
          thead
            tr.text-center(style="background-color: #E8E8E8")
              <th colspan="2">110505 Caja</th>
          tbody
            tr.text-center
              td Debe
              td Haber
            tr
              td.text-center $1.200.000
              td 
      .col-md-4(data-aos="fade-left")
        table(style="border-top: 1px solid #59C447") 
          thead
            tr.text-center(style="background-color: #E8E8E8")
              <th colspan="2">138020 Cuentas por cobrar de terceros</th>
          tbody
            tr.text-center
              td Debe
              td Haber
            tr
              td.text-center $700.000
              td 

    p.mb-5 Los registros contables se deben registrar por el sistema de doble partida, el cual busca un equilibrio en los movimientos contables; de acuerdo con las cuentas, estas disminuyen o aumentan en el debe o el haber; en el debe, se registran todos los ingresos, y en el haber, todas las salidas.

    .row.justify-content-center.mb-5
      .col-md-10.col-11.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4
          span Movimiento contable
      .col-md-8.col-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img09.svg')

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2.	Estados financieros

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2(data-aos="fade-right")
        p Los estados financieros son el reflejo de la contabilidad de las empresas y muestran su estructura económica y financiera de acuerdo con la actividad económica que ejercen. Dentro de los estados financieros, se encuentran:
        ol.lista-dollar.ps-3
          li.mb-2
            .lista-dollar
            | Situación financiera 
          li.mb-2
            .lista-dollar
            | Resultados
          li.mb-2
            .lista-dollar
            | De cambio en el patrimonio
          li.mb-2
            .lista-dollar
            | Flujo de efectivo
        p.mt-2 De esta manera, reconozca los estados financieros: 
      .col-lg-5.col-md-6.col-10.order-md-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img10.png')

    .row.mb-5(data-aos="fade-right")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img11.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de situación financiera (Balance general)
              p.mb-0 Bienes, dinero y derechos (Activos)
              p.mb-0 Obligaciones (Pasivos)
              p Capital y reservas (Patrimonio)
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img12.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de resultados
              p Refleja los ingresos y costos de la empresa y detalla si en el periodo hubo beneficios o pérdidas.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img13.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de cambio en el patrimonio
              p Refleja la variación de entradas y salidas de dinero en un periodo determinado; se detalla la evolución del patrimonio.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img14.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de flujo de efectivo
              p Refleja las fuentes y usos del efectivo en la empresa.

    p El estado de situación financiera, o balance general, de acuerdo con la Norma Internacional de Contabilidad (NIC), refleja los bienes, dineros y derechos de la empresa, los cuales se denominan Activos, y se dividen en activos no corrientes y activos corrientes.
    p.mb-5 En cuanto a las obligaciones, en el estado de situación financiera, se denominan pasivos, y también se dividen en pasivos no corrientes y pasivos corrientes. El capital y las reservas de la empresa se  denominan patrimonio. A continuación, se presentan algunos conceptos del estado de situación financiera: 

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-5.col-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img15.png') 
      .col-lg-8.col-md-7.col-12(data-aos="fade-right")
        .row.align-items-center
          .col-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img16.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  h5 ACTIVOS CORRIENTES
                  p Activos líquidos en el corto plazo.
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img17.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-3
                  h5 ACTIVOS NO CORRIENTES
                  p Hacen parte de la empresa por su estructura, pero no de su etapa productiva - largo plazo.
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img18.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  h5 PASIVOS CORRIENTES 
                  p Deuda y obligaciones a corto plazo.
          .col-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img19.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  h5 PASIVOS NO CORRIENTES  
                  p Deuda y obligaciones a largo plazo.
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  h5 PATRIMONIO
                  p Capital, reservas y resultados.

    p.mb-5 Otra de las utilidades que se encuentran con la contabilidad es la posibilidad de planeación, mediante la implementación de los presupuestos, que permiten la planeación operativa de la empresa en un periodo de tiempo futuro, y dentro de los cuales se encuentran: 

    .row.justify-content-center.mb-5
      .col-md-10.col-11.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5
          span Presupuesto maestro
      .col-md-10.col-11
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img21.svg')

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3.	Indicadores financieros
  
    p Los indicadores financieros permiten analizar la situación económica y financiera de una empresa, son de vital importancia, debido a que permiten realizar un adecuado seguimiento y control de los estados financieros, así como la toma de decisiones dentro de las organizaciones.
    p.mb-5 Dentro de los indicadores económicos, se encuentran:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Indicador de liquidez o solvencia")
        h4 Indicador de liquidez o solvencia
        p Es la capacidad que tienen los activos de la empresa de convertirse en efectivo en el corto plazo.
        .tabla-a.color-acento-contenido.mb-5.p-3(data-aos="fade-right")
          table  
            thead
              tr
                th Indicador
                th Concepto
                th Fórmula
            tbody(style="background-color: #ffffff")
              tr
                td Capital de trabajo reto 
                td Son los recursos que emplea la empresa a corto plazo.
                td (Activo corriente – Pasivo corriente)
              tr
                td Índice corriente  
                td Es la capacidad que tiene la empresa de pagar en el corto plazo sus pasivos corrientes con el activo corriente.
                td (Activo corriente/Pasivo corriente)
              tr
                td Prueba ácida 
                td La capacidad de cubrir los pasivos con los activos, a corto plazo, sin contar con los inventarios.
                td ((Activo corriente-inventario)/Pasivo corriente)
      .tarjeta.color-acento-botones--borde.p-4(titulo="Indicador de endeudamiento")
        h4 Indicador de endeudamiento
        p Indica el nivel de obligaciones que tiene la empresa frente a terceros. 
        .tabla-a.color-acento-contenido.mb-5.p-3(data-aos="fade-right")
          table  
            thead
              tr
                th Indicador
                th Concepto
                th Fórmula
            tbody(style="background-color: #ffffff")
              tr
                td Endeudamiento total 
                td Indica el porcentaje en que se encuentran comprometidos los activos para el pago de la deuda.
                td ((Pasivo total x 100)/Activo total)
              tr
                td Endeudamiento financiero  
                td Indica el porcentaje en que se encuentran comprometidas las ventas para el pago de la obligación financiera.
                td (Obligación financiera/Venta neta) x 100
              tr
                td Apalancamiento a corto plazo
                td Indica el porcentaje en que se encuentra comprometido el patrimonio para el pago de la deuda.
                td (Pasivo corriente/Patrimonio)
      .tarjeta.color-acento-botones--borde.p-4(titulo="Indicador de rentabilidad")
        h4 Indicador de rentabilidad
        p Mide la capacidad que tienen los bienes de la empresa para generar ingresos y rentabilidad. 
        .tabla-a.color-acento-contenido.mb-5.p-3(data-aos="fade-right")
          table  
            thead
              tr
                th Indicador
                th Concepto
                th Fórmula
            tbody(style="background-color: #ffffff")
              tr
                td Margen de utilidad bruta
                td Indica el porcentaje de utilidad de las ventas, una vez se cubre los costos de producción.
                td (Utilidad bruta/ventas netas ) x 100
              tr
                td Margen de rentabilidad operacional
                td Indica el porcentaje de utilidad de las ventas, una vez se cubre los costos de producción y gastos operativos.
                td (Utilidad operacional/ventas netas ) x 100
              tr
                td Margen neto de utilidad
                td Indica el porcentaje de utilidad de las ventas, una vez se cubre los costos de producción, gastos operativos e impuestos.
                td (Utilidad neta/ventas netas) x 100
              tr
                td Rendimiento de patrimonio
                td Indica el porcentaje de rendimiento de las utilidades netas sobre el patrimonio.
                td (Utilidad neta/patrimonio) x 100
      .tarjeta.color-acento-botones--borde.p-4(titulo="Indicadores de eficiencia")
        h4 Indicadores de eficiencia
        p Permiten medir la productividad de las empresas. 
        .tabla-a.color-acento-contenido.mb-5.p-3(data-aos="fade-right")
          table  
            thead
              tr
                th Indicador
                th Concepto
                th Fórmula
            tbody(style="background-color: #ffffff")
              tr
                td Rotación de cartera
                td Mide el tiempo que tarda la empresa en recuperar su cartera.
                td 
                  p (Venta crédito / promedio de cuentas por cobrar)
                  p El promedio de cuentas por cobrar se determina: (saldo inicial + saldo final)/2
                  p Para determinar el No. de días, se estima: (360/rotación de cartera)
              tr
                td Rotación de inventarios
                td Mide el tiempo que tarda la empresa en rotar el inventario.
                td 
                  p (Costo de venta del periodo/Inventario promedio de mercancías) No. de veces
                  p Para determinar el No. de días, se estima: (360/rotación de inventario)
              tr
                td Cuentas por pagar
                td Mide el tiempo que tarda la empresa en pagar sus obligaciones.
                td 
                  p (Compras a crédito/Promedio de cuentas por pagar): No. de veces
                  p Para determinar el No. de días, se estima: (360/No. de veces)
              tr
                td Rotación de activos fijos
                td Indica la eficiencia de las empresas para generar ingresos.
                td Ventas/Activos fijos

    .row.align-items-center.justify-content-center.mb-5
      .col-md-6.col-10(data-aos="fade-right")
        p La capacidad de las empresas para analizar estos indicadores financieros permite que se tenga una correcta educación financiera, que lo que busca es tener un concepto más profundo de las finanzas y del manejo del dinero, tanto en lo personal como al interior de las organizaciones.
        p Todos los análisis que se realicen alrededor de los estados financieros permiten tomar mejores decisiones, tanto para invertir o mejorar como para tomar la decisión de dejar un negocio.
        p De acuerdo con la Encuesta de Capacidad Financiera de los Países Andinos, elaborada por la Corporación Andina de Fomento (CAF, 2015), la situación de la educación financiera en Colombia es la siguiente:
      .col-md-6.col-10(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img22.png')

    .row.justify-content-center.mb-5.mb-md-5(data-aos="fade-right")
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema3/img23.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2.py-4.bg3
            h4.mb-0.text-center Planificación financiera. 
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5.mb-4 Planificación financiera. 
              p Las decisiones financieras no son compartidas entre los integrantes del grupo familiar. El 62 % de las veces, la decisión la toma una sola persona.
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema3/img24.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2.py-4.bg3
            h4.mb-0.text-center Elaboración y utilización de un presupuesto. 
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5.mb-4 Elaboración y utilización de un presupuesto. 
              p El 58 % de las personas planifican con regularidad sus pagos y gastos. Una vez elaborado el presupuesto, se respeta en un 61 %.
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema3/img25.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2.py-3.bg3
            h4.mb-0.text-center Conocimiento de los productos que ofrece el sistema financiero. 
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5.mb-4 Conocimiento de los productos que ofrece el sistema financiero. 
              p El 96 % de las personas han oído hablar de por lo menos un producto financiero. La cuenta de ahorro y las tarjetas de crédito son los más conocidos. Sin embargo, esto no significa que conozcan sus características ni cómo manejarlas para obtener el mayor beneficio.





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
