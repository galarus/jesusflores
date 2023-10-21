import Etiqueta1 from './assets/etiqueta1.png'
import Etiqueta2 from './assets/etiqueta2.png'
import Etiqueta3 from './assets/etiqueta3.png'
import Etiqueta4 from './assets/etiqueta4.png'

import Rectangle2 from './assets/Rectangle 2.svg'
import Arrow from './assets/Arrow.svg'

import Arrow1 from './assets/Arrow1.svg'

const Services = () => (
  <section class='services'>
    <div class='servicios'>
      <h1 class='title2'>SERVICES</h1>
      <h2 class='subtitle'>
        <span class='production'>//</span> from music production
      </h2>
      <img src={Arrow} alt='arrow' class='arrow' />

      <h2 class='videogame'>till video game music</h2>
    </div>

    <div class='view__all'>
      {' '}
      <span class='span2'>VIEW ALL</span>
      <img src={Rectangle2} alt='view ALL' class='rentangle' />
    </div>

    <div class='etiquetas'>
      <div class='etiqueta1'>
        <h1 class='titulo'>Music production</h1>
        <img src={Arrow1} alt='arrow' class='arrow1' />
        <img src={Etiqueta1} alt='etiqueta1' class='imagen4' />
        <p class='parrafo1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b /> Quisque
          non nulla quis dictum sollicitudin nunc at. Vel
          <br /> etiam dolor et imperdiet suspendisse tortor a eget viverra.
        </p>
      </div>

      <div class='etiqueta2'>
        <h1 class='titulo titulo2'>Video Game Music</h1>
        <img src={Arrow1} alt='Produccion Musical' class='arrow2' />
        <img src={Etiqueta2} alt='videojuegos' class='imagen5' />
        <p class='parrafo1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
          Quisque non nulla quis dictum sollicitudin nunc at. Vel
          <br /> etiam dolor et imperdiet suspendisse tortor a eget viverra.
        </p>
      </div>

      <div class='etiqueta3'>
        <h1 class=' titulo titulo6'>Mixing</h1>
        <img src={Arrow1} alt='Mixing' class='arrow3' />
        <img src={Etiqueta3} alt='videojuegos' class='imagen6' />
        <p class='parrafo1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
          Quisque non nulla quis dictum sollicitudin nunc at. Vel
          <br /> etiam dolor et imperdiet suspendisse tortor a eget viverra.
        </p>
      </div>

      <div class='etiqueta4'>
        <h1 class='titulo titulo4'>Guitarist</h1>
        <img src={Arrow1} alt='Mixing' class='arrow4' />
        <img src={Etiqueta4} alt='Guitarrist' class='imagen7' />
        <p class='parrafo1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
          Quisque non nulla quis dictum sollicitudin nunc at. Vel
          <br /> etiam dolor et imperdiet suspendisse tortor a eget viverra.
        </p>
      </div>
    </div>
  </section>
)

export default Services
