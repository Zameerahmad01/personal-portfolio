import React, { useState } from 'react'
import './Services.css'

const design=[
"I develop the user interface.",
"Web page development.",
"I create ux element interactions.",
"I position your company brand.",
"Design and mockups of products for companies."
]

function Services() {

    const [ToggleState, setToggleState] = useState(0)

    const ToggleTab = (index) =>{
        setToggleState(index)
    }
  return (
    <section className='services section ' id='services'>
      <h2 className="section__title">Services</h2>
      <span className='section__subtitle'>What I Offer ?</span>

      <div className="services__container container grid">
        <div className="services__content">
            <i className='uil uil-arrow services__icon'></i>
            <h3 className="services__title">Ui/Ux <br/> Designer</h3>

            <span className='services__button' onClick={()=>{
                ToggleTab(1)
            }}>
                View More 
                <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div className={ToggleState === 1 ? "services__modal active_modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className='uil uil-times services__modal-close'
                     onClick={()=>{
                        ToggleTab(0)
                    }}></i>

                    <h3 className="services__modal-title">Ui/Ux Designer</h3>
                    <p className="services__modal-description">
                    Service with more than 3 years of experience.Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">

                        {design.map((item, index)=>(
                          <li key={index} className="services__modal-service">
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">{item}</p>
                          </li>
                        ))}
                       
                    </ul>
                </div>
            </div>
        </div>


        <div className="services__content">
            <i className='uil uil-edit services__icon'></i>
            <h3 className="services__title">Visual <br/> Designer</h3>

            <span className='services__button' onClick={()=>{
                ToggleTab(2)
            }}>
                View More 
                <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div className={ToggleState === 2 ? "services__modal active_modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className='uil uil-times services__modal-close'
                     onClick={()=>{
                        ToggleTab(0)
                    }}
                    ></i>

                    <h3 className="services__modal-title">Visual Designer</h3>
                    <p className="services__modal-description">
                    Service with more than 3 years of experience.Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">

                        {design.map((item, index)=>(
                          <li key={index} className="services__modal-service">
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">{item}</p>
                          </li>
                        ))}
                       
                    </ul>
                </div>
            </div>
        </div>


        <div className="services__content">
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className="services__title">Product <br/> Designer</h3>

            <span className='services__button' onClick={()=>{
                ToggleTab(3)
            }}>
                View More 
                <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div className={ToggleState === 3 ? "services__modal active_modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className='uil uil-times services__modal-close'
                    onClick={()=>{
                        ToggleTab(0)
                    }}
                    ></i>

                    <h3 className="services__modal-title">Product Designer</h3>
                    <p className="services__modal-description">
                    Service with more than 3 years of experience.Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">

                        {design.map((item, index)=>(
                          <li key={index} className="services__modal-service">
                            <i className='uil uil-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">{item}</p>
                          </li>
                        ))}
                       
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Services
