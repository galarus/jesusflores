import MusicIcon from './assets/Music Icon.svg'

const NavBar = () => (
  <div class='nav__bar'>
    <div class='nav__item'>
      <a href='#' class='productions'>
        Productions
      </a>
    </div>
    <div class='nav__item'>
      <a href='#' class='services'>
        Services
      </a>
    </div>
    <div class='nav__item'>
      <a href='#' class='NFTs'>
        NFTs
      </a>
    </div>
    <div class='nav__item'>
      <a href='#' class='contact'>
        Contact
      </a>
    </div>
    <div class='nav__item'>
      <a href='#' class='more'>
        More<span class='cross'>+</span>
      </a>
    </div>
    <div class='nav__item'>
      <span class='nav__cuidad'>La Cuidad de las Flores | Pamela</span>
    </div>
    <div>
      <div class='icon__box'>
        <img src={MusicIcon} alt='imagen' class='sound__icon' />
      </div>
    </div>
  </div>
)

export default NavBar
