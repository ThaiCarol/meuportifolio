import React  from 'react';
import {bienal} from '../../constants/dados';
import "./Bienal.css";

const Bienal = () => {
    return (
        <div className='work section-p bg-grey' id='bienal'>
            <div className='container'>
                <div className='work-content'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Bienal do Livro <span className='text-dark'>2022</span></h3>
                        <p className='text'>Meu stand da Bienal de 2022 e a participação dos queridos leitores que fizeram minha alegria.</p>
                    </div>
                    
                    <div className='work-list grid'>
                        {
                            bienal.map((bienal, index) => {
                                return (
                                    <div className='work-item text-center' key={index}>
                                        <img src= {bienal.image} alt="" />
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

export default Bienal