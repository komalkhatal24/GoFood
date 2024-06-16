import React, { useEffect } from "react";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
    const [search,setSearch]= useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="car">
                <div className='carousel' id="Carousel" style={{ maxWidth: '1700px' ,maxheight: '500px', margin: 'auto'}}>
                    <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                        <div className="carousel-inner">
                            <div className='carousel-caption' style={{ zIndex: "10" }}>
                                <div className="d-flex justify-content-center">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange={(e)=>{
                                        setSearch(e.target.value)
                                    }} />
                                    {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                                </div>
                            </div>
                            <div className="carousel-item active ">
                                <img src="https://t3.ftcdn.net/jpg/06/09/87/72/360_F_609877299_RESSmJRYXRP703RsDKE1XqfZnhruS4VI.jpg" className="d-block w-100" alt="Slide 1" />
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
            </div>

            <div className="container">
                {foodCat !== [] ? foodCat.map((data) => {
                    return (
                        <div className="row mb-3">
                            <div key={data._id} className="fs-3 m-3">
                                {data.CategoryName}
                            </div>
                            <hr />
                            {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                .map(filterItems => {
                                    return (
                                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                            <Card foodItem={filterItems}
                                                options={filterItems.options[0]}
                                                
                                            ></Card>
                                        </div>
                                    );
                                }) : <div>No Such Data </div>}
                        </div>
                    );
                }) : ""}
            </div>
            <Footer />
        </div>
    );
}
