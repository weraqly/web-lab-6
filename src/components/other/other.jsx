import React from 'react';
import './other.css'; 

const Other_section = () => {
  return (
    <section id="other_s">
      <h2>Here are some products from our shop</h2>
      <div className="image-row">
        <div className="image-container">
          <img 
            src="/img/IMG_2937.JPG" 
            alt="Commercial Jet" 
            className="other-image"
          />
          <p>Tent</p>
          <button>Buy</button>
        </div>

        <div className="image-container">
          <img 
            src="/img/IMG_2938.JPG" 
            alt="Regional Aircraft" 
            className="other-image" 
          />
          <p>Blackpack</p>
          <button>Buy</button>
        </div>

        <div className="image-container">
          <img 
            src="/img/IMG_2939.JPG" 
            alt="Cargo Plane" 
            className="other-image" 
          />
          <p>Row</p>
          <button>Buy</button>
        </div>
      </div>
      <div className="image_container_fog">
        <img 
          src="/img/IMG_2202.jpg" 
          alt="placeholder" 
          className="imagee" 
        />
      </div>
    </section>
  );
};

export default Other_section;
