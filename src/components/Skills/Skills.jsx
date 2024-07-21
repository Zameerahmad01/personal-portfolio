import React from 'react'
import './Skills.css'
import FrontEnd from './FrontEnd'

function Skills() {
  return (
    <section className='skills section ' id='skills'>
      <h2 className="section__title">Skills</h2>
      <span className='section__subtitle'>My Technical Level</span>

      <div className="skill__container container grid">
        <FrontEnd />
      </div>
    </section>
  )
}

export default Skills
