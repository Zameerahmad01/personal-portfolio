import React from 'react'

export default function FrontEnd() {
  return (
    <div className='skills__content grid'>
      <div className="skills__title">Front End Developer</div>

      <div className="skills__box grid">
        <div className="skills__group">
            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div className='skills__data-content'>
                <div className="skills__name">
                  <h3>HTML</h3>
                  <p>90%</p>
                  </div>
                <div className="skills__level"></div>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
            <div className="skills__name">
                  <h3>CSS</h3>
                  <p>90%</p>
                  </div>
                <span className="skills__level css-level"></span>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
            <div className="skills__name">
                  <h3>Javascript</h3>
                  <p>70%</p>
                  </div>
                <span className="skills__level js-level"></span>
            </div>
            </div>

            
        </div>
        
        <div className="skills__group">
            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
            <div className="skills__name">
                  <h3>React</h3>
                  <p>80%</p>
                  </div>
                <span className="skills__level react-level"></span>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
            <div className="skills__name">
                  <h3>Tailwind Css</h3>
                  <p>80%</p>
                  </div>
                <span className="skills__level tail-level"></span>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
            <div className="skills__name">
                  <h3>Git</h3>
                  <p>70%</p>
                  </div>
                <span className="skills__level git-level"></span>
            </div>
            </div>
            
           
        </div>
      </div>
    </div>
  )
}
