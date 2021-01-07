import Head from 'next/head'
import dynamic from 'next/dynamic'

import { Container } from '../../styles/pages/Home'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import SmarthphoneIcon from '../../../public/svg/smartphone.svg'
import ThumbUpIcon from '../../../public/svg/thumb_up.svg'
import VolumeUpIcon from '../../../public/svg/volume_up.svg'
import PlayIcon from '../../../public/svg/play.svg'
import SwitchContainer from '../../../containers/switch.container'
import ProductImage from '../../../public/one_sl_dark_front.png'
import MobileMenu from '../../../components/MobileMenu'

const HeaderContainer = dynamic(() =>
  import('../../../containers/header.container.js')
)
const MediaPlayerContainer = dynamic(() =>
  import('../../../containers/media.container.js')
)

const Home = () => {
  const [toggle, setToggle] = useState(false)

  function closeComponent() {
    setToggle(!toggle)
  }

  const theme = useSelector(state => state.theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>SONOS | Visão geral</title>
        </Head>
        <Container>
          <MediaPlayerContainer
            toggle={toggle}
            closeComponent={closeComponent}
          />
          <HeaderContainer />
          <MobileMenu />
          <main>
            <div className="main_content">
              <div className="product">
                <section className="product_photo">
                  <div className="image_el">
                    <img
                      draggable={false}
                      alt="Product"
                      src={ProductImage}
                    ></img>
                  </div>
                  <SwitchContainer />
                </section>
                <section className="product_info">
                  <div className="title">
                    <h3>Som incomparável</h3>
                    <h1>Sonos One SL</h1>
                  </div>
                  <div className="description">
                    <p>
                      O potente alto-falante sem microfone para música e muito
                      mais.
                    </p>
                    <p>
                      Obtenha som rico que preenche a sala com Sonos One SL e
                      controle-o com o aplicativo Sonos, Apple AirPlay 2 e muito
                      mais. A configuração leva minutos, e o controle é simples
                      com o aplicativo Sonos, Apple AirPlay 2 e sua voz.
                    </p>
                  </div>
                  <section className="below_infos">
                    <div className="below_el">
                      <VolumeUpIcon />
                      <h4>Som brilhante</h4>
                    </div>
                    <div className="below_el">
                      <ThumbUpIcon />
                      <h4>Fácil de usar</h4>
                    </div>
                    <div className="below_el">
                      <SmarthphoneIcon />
                      <h4>Suporte para o App Sonos</h4>
                    </div>
                  </section>
                  <div className="button_container">
                    <button className="button">Compre por $ 299.00</button>
                    <button onClick={closeComponent} className="button">
                      <PlayIcon></PlayIcon>
                      Veja um vídeo
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Home
