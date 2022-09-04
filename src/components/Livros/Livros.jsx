import React from "react";
import "./Livros.css";
import {publicados} from "../../constants/dados"; 
import {Link} from 'react-router-dom';

const Livros = () => {
    return (
        <div className="services section-p" id="publicados">
            <div className="container">
                <div className="services-content">
                    <div className="section-title">
                        <h3 className="text-brown"> Títulos <span className="text-dark">Publicados</span></h3>
                        <p className="text">Lindas histórias para aquecer o coração que vão dar aquele quentinho na alma!</p>
                    </div>
                    <div className="services-list grid">
                        {
                            publicados.map((publicados, index) => {
                                return (
                                    <div className="services-item text-center" key={index}>
                                        <div className="service-item-text">
                                            <h4 className="fs-22 fw-5 op-08"><Link to = "/">{publicados.title}</Link></h4>
                                        </div>
                                        <div className="services-item-img">
                                            <img src= {publicados.image} className ="mx-auto" alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Livros