import React from 'react'
import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'
import { Spotlight } from '../ui/SpotLight'

function Home() {
  return (
    <section className="Home section relative" id="home">
     
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <Scroll />
        </div>

        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    </section>
  )
}

export default Home
