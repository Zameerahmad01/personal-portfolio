import React from "react";
import './Footer.css'

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container container grid">
        <h3 className="footer__title">Zameer</h3>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/zameer_bodla/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://github.com/Zameerahmad01"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/zameer-ahmad-55b2aa302/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Zameerahmad. All rigths reserved</span>
      </div>
    </section>
  );
}

export default Footer;
