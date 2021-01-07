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

  const themeState = useSelector(state => state.theme)

  return (
    <>
      <ThemeProvider theme={themeState}>
        <Head>
          <title>SONOS | Overview</title>
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
                    <h3>Uncompared Sound</h3>
                    <h1>Sonos One SL</h1>
                  </div>
                  <div className="description">
                    <p>
                      The powerful microphone-free speaker for music and more.
                    </p>
                    <p>
                      Get rich room-filling sound with Sonos One SL,and control
                      it with the Sonos app, Apple AirPlay 2, and more. Setup
                      takes minuts, and control is simple with the Sonos app,
                      Apple AirPlay 2, and your voice.
                    </p>
                  </div>
                  <section className="below_infos">
                    <div className="below_el">
                      <VolumeUpIcon />
                      <h4>Brilliant sound</h4>
                    </div>
                    <div className="below_el">
                      <ThumbUpIcon />
                      <h4>Easy to use</h4>
                    </div>
                    <div className="below_el">
                      <SmarthphoneIcon />
                      <h4>SONOS App support</h4>
                    </div>
                  </section>
                  <div className="button_container">
                    <button className="button">Buy for $ 299.00</button>
                    <button onClick={closeComponent} className="button">
                      <PlayIcon></PlayIcon>
                      Watch video
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
