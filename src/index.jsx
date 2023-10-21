import { render } from 'preact'
import './style.css'

import NavBar from './nav_bar'
import Slides from './slides'
import Services from './services'
import Arrow1 from './assets/Arrow1.svg'

import Rectangle2 from './assets/Rectangle 2.svg'
import Rectangle137 from './assets/Rectangle 137.png'

import CD from './assets/CD.svg'
import ControlImage from './assets/Control Image.png'
import News1 from './assets/news__1.png'
import News2 from './assets/News2.png'
import News3 from './assets/News3.png'
import News4 from './assets/News4.png'
import ImagenFondo2 from './assets/Imagen Fondo2.png'
import Facebook from './assets/facebook.svg'
import ImagenGaleria1 from './assets/imagen__galeria1.png'
import ImagenGaleria2 from './assets/imagen__galeria2.png'
import ImagenGaleria3 from './assets/imagen__galeria3.png'
import ImagenGaleria4 from './assets/imagen__galeria4.png'
import ImagenGaleria5 from './assets/imagen__galeria5.png'
import ImagenGaleria6 from './assets/imagen__galeria6.png'
import Twitter from './assets/twitter.svg'
import Youtube from './assets/youtube.svg'
import Spotify from './assets/spotify.svg'
import Cursor from './assets/cursor.svg'

export function App () {
  return (
    <div class='contenedor'>
      <h1 class='jesus'>JESUS FLORES</h1>

      <div class='img__container'>
        <NavBar />

        <div class='titles'>
          <h1 class='title'>Jesus Flores</h1>
          <p class='producer'>Music Producer</p>
        </div>

        <Slides />
        <Services />

        <section class='NFTs'>
          <div class='NFTs__title'>
            <h1 class='title__NFT'>NFT'S</h1>
            <h2 class='h2'>
              <span class='blue'>//</span> get your NFT track today
            </h2>
            <div class='view__All2'>VIEW ALL</div>
            <img src={Rectangle2} alt='view all' class='rectangle2' />
          </div>
          <div class='imagen__fondo'>
            <img src={ControlImage} alt='imagen' />
          </div>
          <div class='NFTs__container'>
            <div class='NFT1'>
              <img src={Rectangle137} alt='rectangle' />
              <div class='rectangle__blue'>
                <h2 class='nft1'>NFT</h2>
                <h2 class='BASIC'>BASIC MIX</h2>
                <h2 class='date'>2021</h2>
                <h2 class='vol1'>vol. 1</h2>
              </div>
            </div>

            <div class='NFT2'>
              <img src={Rectangle137} alt='rectangle' />
              <div class='rectangle__blue2'>
                <h2 class='nft1'>NFT</h2>
                <h2 class='BASIC'>
                  VOCAL SEP
                  <br /> UP
                </h2>
                <h2 class='date2'>2021</h2>
                <h2 class='vol12'>vol. 1</h2>
              </div>
            </div>

            <div class='NFT3'>
              <img src={Rectangle137} alt='rectangle' />
              <div class='rectangle__blue3'>
                <h2 class='nft1'>NFT</h2>
                <h2 class='BASIC'>
                  MASTERING
                  <br />
                  SET UP
                </h2>
                <h2 class='date3'>2021</h2>
                <h2 class='vol13'>vol. 1</h2>
              </div>
            </div>
          </div>

          <div class='discos'>
            <img src={CD} alt='disco' class='CD1' />
            <img src={CD} alt='disco' class='CD2' />
            <img src={CD} alt='disco' class='CD3' />
          </div>

          <div class='subtitles'>
            <h2 class='basic__mix'>
              Basic Mix
              <br />
              <span class='span'> JUNE 16</span>
            </h2>

            <h2 class='Vocal__setup'>
              Vocal Set Up <br />
              <span class='span2'> JUNE 16</span>
            </h2>

            <h2 class='mastering__setup'>
              Mastering Set Up
              <br />
              <span class='span3'> JUNE 16</span>
            </h2>
          </div>
        </section>
        <section class='news'>
          <div class='News__title'>
            <h2 class='News'>NEWS</h2>
            <p class='follow'>
              <span class='blue2'>//</span> follow our news and always stay
              updated
            </p>
          </div>
          <div class='view__all3'>VIEW ALL</div>
          <img src={Rectangle2} alt='rectangle' class='rectangle5' />

          <div class='news__container'>
            <div class='News1'>
              <img src={News1} alt='imagen' class='News__imagen1' />
              <h2 class='news__title News__title1'>JUNE 16</h2>
              <div class='News__tag News__Film'>FILM</div>
              <p class='News__paragraph News__paragraph'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Vestibulum at orci eget
                <br /> ullamcorper feugiat ac et urna.
              </p>
            </div>
            <div class='News2'>
              <img src={News2} alt='imagen' class='News__imagen2' />
              <h2 class='news__title News__title2'>MAY 28</h2>
              <div class='News__tag News__Music1'>MUSIC</div>
              <p class='News__paragraph News__paragraph2'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Vestibulum at orci eget
                <br /> ullamcorper feugiat ac et urna.
              </p>
            </div>
            <div class='News3'>
              <img src={News3} alt='Imagen' class='News__imagen3' />
              <h2 class='news__title News__title3'>APRIL 11</h2>
              <div class='News__tag News__Music2'>MUSIC</div>
              <p class='News__paragraph News__paragraph3'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Vestibulum at orci eget
                <br /> ullamcorper feugiat ac et urna.
              </p>
            </div>
            <div class='News4'>
              <img src={News4} alt='imagen' class='News__imagen4' />
              <h2 class='news__title News__title4'>DECEMBER 04</h2>
              <div class='News__tag News__Music3'>MUSIC</div>
              <p class='News__paragraph News__paragraph4'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Vestibulum at orci eget
                <br /> ullamcorper feugiat ac et urna.
              </p>
            </div>
          </div>
        </section>
        <section class='about__me'>
          <img src={ImagenFondo2} alt='imagen' class='imagen__fondo2' />
          <div class='about__container'>
            <div class='about__me'>
              <h1 class='About__Me'>ABOUT ME</h1>
              <p class='About__Paragraph'>
                Cuando tenía 8 años escuche por primera vez la guitarra y fue
                una conexión con la voz del instrumento que aun no puedo
                explicar, así fue como La Música se convirtió en mi modo de
                vida. A lo largo del tiempo fueron más los errores que me
                formaron que la parte académica, eso me hizo entender que la
                mejor escuela de música es La Historia de la Música, que los
                mejores métodos son Los Discos y que si respetas la Música ella
                hará lo mismo contigo
              </p>

              <h2 class='continue'>CONTINUE READING</h2>
              <img class='arrow4' src={Arrow1} alt='flecha' />
            </div>
          </div>
          <div class='icons'>
            <img src={Facebook} alt='facebook' class='facebook' />
            <img
              src='./assets/instagram.svg'
              alt='instagram'
              class='instagram'
            />
            <img src={Twitter} alt='twiter' class='twiter' />
            <img src={Youtube} alt='youtube' class='youtube' />
            <img src={Spotify} alt='spotify' class='spotify' />
          </div>

          <div class='galeria__imagenes'>
            <img src={ImagenGaleria1} alt='imagen' class='imagen__1' />
            <img src={ImagenGaleria2} alt='imagen' class='imagen__2' />
            <img src={ImagenGaleria3} alt='imagen' class='imagen__3' />
            <img src={ImagenGaleria4} alt='imagen' class='imagen__4' />
            <img src={ImagenGaleria5} alt='imagen' class='imagen__5' />
            <img src={ImagenGaleria6} alt='imagen' class='imagen__6' />
          </div>
        </section>
        <section class='Contacto'>
          <div class='contact__container'>
            <h1 class='contact3'>CONTACT</h1>
            <p class='contact__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div class='input_container'>
            <div class='input__container1'>
              <input type='text' value='First Name' class='First__Name' />
              <input type='text' value='Last Name' class='Last__Name' />
            </div>
            <div class='input__container2'>
              <input type='text' value='Enter Email Adress' class='email' />
              <input
                type='text'
                value='Enter your message...'
                class='Enter__message'
              />
              ``
            </div>
          </div>
        </section>
      </div>

      <div class='Send__message'>SEND MESSAGE</div>
      <div class='rectangle6'>
        <img src={Rectangle2} alt='imagen' />
      </div>

      <footer class='footer'>
        <div class='footer__container1'>
          <h1 class='Jesus4'>Jesus Flores</h1>
          <img src={Cursor} alt='imagen' class='icon2' />
        </div>

        <div class='Footer__info'>
          <div class='info__row1'>
            <h2 class='company'>COMPANY</h2>
            <h2 class=' info1 Productions'>Productions</h2>
            <h2 class='info1 services'>Services</h2>
          </div>
          <div class='info__row2'>
            <h2 class='company'>UPDATES</h2>
            <h2 class=' info1 NFTs'>NFTs</h2>
            <h2 class='info1 News'>News</h2>
          </div>
          <div class='info__row3'>
            <h2 class='company'>JESUS F</h2>
            <h2 class='info1 About'>About Me</h2>
            <h2 class='info1 contact4'>Contact</h2>
          </div>
        </div>

        <div class='privacy__terms'>
          <h2 class='terms privacy__policy'>Privacy Policy</h2>
          <h2 class='terms terms__service'>Terms of service</h2>
          <h2 class='terms cookie__policy'>Cookie Policy</h2>
        </div>
      </footer>
    </div>
  )
}

function Resource (props) {
  return (
    <a href={props.href} target='_blank' class='resource'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  )
}

render(<App />, document.getElementById('app'))
