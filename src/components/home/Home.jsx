import React from 'react'
import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'

function Home() {
  return (
    <section className="Home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <Scroll />
        </div>
    </section>
  )
}

export default Home
