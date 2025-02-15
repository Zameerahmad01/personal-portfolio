import React from 'react'

function Info() {
  return (
    <div className='about__info grid'>
      <div className="about__box">

       <i className='bx bx-award about__icon'></i>

        <h3 className='about__title'>Experience</h3>
        <p className='about__subtitle'>1 Year Working</p>
      </div>

      <div className="about__box">

      <i className='bx bx-briefcase-alt about__icon'></i>

        <h3 className='about__title'>Completed</h3>
        <p className='about__subtitle'>10 + Projects</p>
      </div>

      <div className="about__box">

      <i className='bx bx-support about__icon'></i>
      
        <h3 className='about__title'>Support</h3>
        <p className='about__subtitle'>online 24/7</p>
      </div>
    </div>
  )
}

export default Info
