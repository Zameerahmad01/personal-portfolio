import React from 'react'
import './Work.css'
import p1 from '../../assets/work1.jpg'
import p2 from '../../assets/work2.jpg'
import p3 from '../../assets/work3.jpg'
import p4 from '../../assets/work4.jpg'
import p5 from '../../assets/work5.jpg'

const projects=[
  {
    title: "portfolio",
    desc: "Aceternity UI is a React based UI library for Aceternity Blockchain.",
    img: p1,
    link: "www.portfolio.com"
  },
  {
    title: "portfolio",
    desc: "Aceternity UI is a React based UI library for Aceternity Blockchain.",
    img: p2,
    link: "www.portfolio.com"
  },
  {
    title: "portfolio",
    desc: "Aceternity UI is a React based UI library for Aceternity Blockchain.",
    img: p3,
    link: "www.portfolio.com"
  },
  {
    title: "portfolio",
    desc: "Aceternity UI is a React based UI library for Aceternity Blockchain.",
    img: p4,
    link: "www.portfolio.com"
  },
  {
    title: "portfolio",
    desc: "Aceternity UI is a React based UI library for Aceternity Blockchain.",
    img: p5,
    link: "www.portfolio.com"
  },
  {
    title: "portfolio",
    desc: "Aceternity UI is a React based UI library for Aceternity Blockchain.",
    img: p1,
    link: "www.portfolio.com"
  }
]



function Work() {
  return (
   <section className="works section " id="works">
     <h2 className="section__title">Projects</h2>
     <span className='section__subtitle'>Recent Projects</span>

     <div className="works__container container grid">
      {projects.map((item,index)=>(
        <div key={index} className="works__content-box">
       
          <div className=".works__content">
            <div className="works__content-img"> 
              <img src={item.img} alt="" className='rounded-lg' />
            </div>
            <h3 className="works__content-title">
              {item.title}
            </h3>
            <p className='works__content-description'>
              {item.desc}
            </p>
            <div className="works__content-bottom">
              <a href={item.link} className='works__content-button button button--flex'>
                Explore Site !
              </a>
            </div>
            
          </div>

        </div>
      ))}
           
      </div>
     
     

   </section>
  )
}

export default Work
