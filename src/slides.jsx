import Imagen2 from './assets/imagen2.png'
import Imagen3 from './assets/imagen3.png'
import Imagen4 from './assets/imagen4.png'
import Pagination from './assets/pagination.svg'
import Arrow1 from './assets/Arrow1.svg'

const Slides = () => (
  <section class='slides'>
    <div class='slide__container'>
      <div class='slide'>
        <img src={Imagen2} alt='imagen' class='imagen1' />
        <p class='info'>La Cuidad de las Flores</p>
        <p class='info2'>Pame Larre</p>
        <h2 class='music music1'>MUSIC</h2>
      </div>
      <div class='slide'>
        <img src={Imagen3} alt='imagen' class='imagen2' />
        <p class='info'>La Cuidad de las Flores</p>
        <p class='info2'>Pame Larre</p>
        <h2 class='music music2'>MUSIC</h2>
      </div>

      <div class='slide'>
        <img src={Imagen4} alt='imagen' class='imagen3' />
        <p class='info'>La Cuidad de las Flores</p>
        <p class='info2'>Pame Larré</p>
        <h2 class='music music3'>MUSIC</h2>
      </div>

      <div class='slide__bar'>
        <img class='img' src={Pagination} alt='Pagination' />
        <h2 class='pagination'>VIEW ALL COMPOSITIONS</h2>
        <img class='img2 arrow' src={Arrow1} alt='arrow' />
      </div>
    </div>
  </section>
)

export default Slides
