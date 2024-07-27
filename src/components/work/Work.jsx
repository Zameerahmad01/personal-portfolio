import React from 'react'
import './Work.css'
import p1 from '../../assets/work1.png'
import p2 from '../../assets/work2.png'
import p3 from '../../assets/work3.png'
import p4 from '../../assets/works4.png'
// import p5 from '../../assets/work5.jpg'

const projects=[
  {
    title: "portfolio",
    desc: "Build with : React js",
    img: p1,
    link: "https://portfolio-fwebzbv82-zameerahmad01s-projects.vercel.app/"
  },
  {
    title: "Ev elution",
    desc: "Build with : React js",
    img: p2,
    link: "https://ev-olution-two.vercel.app/"
  },
  {
    title: "Tik Tac Toe",
    desc: "Build with : React js",
    img: p3,
    link: "https://tic-tac-toe-kohl-eight.vercel.app/"
  },
  {
    title: "Docs",
    desc: "Build with : React js",
    img: p4,
    link: "https://docs-three-blush.vercel.app/"
  },
  
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
              <img src={item.img} alt="" className='rounded-md' />
            </div>
            <h3 className="works__content-title">
              {item.title}
            </h3>
            <p className='works__content-description'>
              {item.desc}
            </p>
            <div className="works__content-bottom">
              <a href={item.link} target='_blank' className='works__content-button button button--flex'>
                Visit Site
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
