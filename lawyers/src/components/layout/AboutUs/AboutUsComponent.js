import React from "react";
import "./about-us.css";
import associateOne from "../../../assets/associate-one.jpg";
import associateTwo from "../../../assets/associate-two.jpg";

function AboutUsComponent() {
  return (
    <section>
      {/* First Section */}
      <div className="px-4 my-5  display-size">
      <h1 className="display-4 fw-bold text-center title-style">Quienes Somos</h1>
      <div className="col-lg-6 mx-auto text-color">
        <p className="lead mb-4 text-center">
          Somos un equipo de profesionales cpodjoivnoifb ofdivopsdjviosnviods
          oinvsdnvoidbnio viondaoincoia vhodnvods onviodsbv oicdnvubdsv obscioac
          ivnoidsbvoisd boisdbvobv oisiobf podnofibf oibfoidbfji obfoebefoi.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a href="/nuestros-servicios" className="btn btn-outline-secondary px-4">
            Conoce Nuestros Servicios
          </a>
        </div>
      </div>
      </div>
      {/* Image */}
      {/* <div className="overflow-hidden">
        <div className="container px-5">
          <img
            src={aboutUs}
            width="700"
            height="500"
            className="img-fluid border rounded-1 shadow-lg mb-4"
            alt="equipo"
          />
        </div>
      </div> */}
      {/* BIO Section */}
      <div className="second-section">
        {/* First BIO */}
        <div className="row row-cols-1 row-cols-md-3 g-4 m-3 my-5">
          <div className="col md-6 mb-4 responsive-img">
            <img
              src={associateOne}
              alt="Socio"
              className="img-associate"
              draggable="false"
            />
          </div>

          <div className="md-6 mb-4 associate-name">
            <h3 className="bio">Perengano Pérez</h3>
            <p className="bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat vitae
              rutrum quis, fringilla et arcu. Vivamus vulputate metus id lacinia
              feugiat. Fusce elementum nunc rutrum sagittis dapibus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Proin vestibulum non
              sapien nec cursus. Aliquam eros augue, placerat vitae rutrum quis,
              fringilla et arcu. Vivamus vulputate metus id lacinia feugiat. Fusce
              elementum nunc rutrum sagittis dapibus.
            </p>
          </div>
        </div>

        {/* Second BIO */}
        <div className="row flex-lg-row-reverse row-cols-1 row-cols-md-3 g-4 m-3 mt-0">
          <div className="col md-6 mb-4 responsive-img">
            <img
              src={associateTwo}
              alt="Socia"
              className="img-associate"
              draggable="false"
            />
          </div>
          <div className="col md-6 mb-4 associate-name">
            <h3 className="bio">Fulanita Fernández</h3>
            <p className="bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vestibulum non sapien nec cursus. Aliquam eros augue, placerat vitae
              rutrum quis, fringilla et arcu. Vivamus vulputate metus id lacinia
              feugiat. Fusce elementum nunc rutrum sagittis dapibus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Proin vestibulum non
              sapien nec cursus. Aliquam eros augue, placerat vitae rutrum quis,
              fringilla et arcu. Vivamus vulputate metus id lacinia feugiat. Fusce
              elementum nunc rutrum sagittis dapibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsComponent;
