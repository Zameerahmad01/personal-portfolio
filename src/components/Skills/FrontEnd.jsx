import React from 'react'

export default function FrontEnd() {
  return (
    <div className='skills__content cont-grid'>
      <div className="skills__title">Front Developer</div>

      <div className="skills__box grid">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">HTML</h3>
                <div className="skills__level">Basic</div>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Advance</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            
        </div>
        
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Tailwind CSS</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>
            
           
        </div>
      </div>
    </div>
  )
}
