import React from 'react';
import './Carousel.css'; // Import the CSS file

const Carousel = () => {
  return (
    <div className='carousel' id="Carousel">
    <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{ objectFit:"contain !important"}}>

      <div className="carousel-inner">
        <div className='carousel-caption' style={{zIndex:"10"}}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active ">
          <img src="https://t3.ftcdn.net/jpg/06/09/87/72/360_F_609877299_RESSmJRYXRP703RsDKE1XqfZnhruS4VI.jpg" className="d-block w-100" alt="Slide 1"  />
          {/* style={{filter:"brightness(30%)"}} */}
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9prvJqanggnR7c_o0WTIovgdPl9qWa-JrQ&usqp=CAU" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default Carousel;