import React from 'react'

function Contact() {
  return (
    <section className='contact section ' id='contact'>
      <h2 className="section__title">Projects</h2>
      <span className='section__subtitle'>Recent Projects</span>

      <div className="contact__container container grid">
        <div className="contact__content">
            <h3 className='contact__title'>Talk To Me</h3>

            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>

                    <h3 className='contact__card-title'>Email</h3>
                    <span className="contact__card_data">zameerahmad4877@gmail.com</span>

                    <a href="mailto:examplemail@gmail.com.com" className="contact__button">
                        write me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>

                    <h3 className='contact__card-title'>Whatsapp</h3>
                    <span className="contact__card_data">+923096476328</span>

                    <a href="https://api.whatsapp.com/send?phone=+923096476328&text=Hello, more information!" className="contact__button">
                        write me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>
            </div>
        </div>


        <div className="contact__content">
            <h3 className='contact__title'>Write me your project</h3>

            <form  className="contact__form">
                <div className="contact__form-container">
                    <label htmlFor="" className="contact__form-tag">Name</label>
                    <input type="text" name='name' className='contact__form-input' placeholder='' />
                </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
