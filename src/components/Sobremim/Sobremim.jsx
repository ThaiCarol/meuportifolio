import React from 'react';
import images from '../../constants/images';
import "./Sobremim.css";

const Sobremim = () => {
    return (
        <div className='about section-p'>
            <div className='container'>
                <div className='about-content'>
                    <div className='about-grid grid'>
                        <img src= {images.sobre_mim} alt="" className='about-img mx-auto' />
                        <div className='section-title'>
                            <h3 className='text-brown'>Eu sou <span className='text-dark'>Anne Alaniz</span></h3>
                            <p className='text mx-auto'>Não vim a este mundo para competir com ninguém. Estou aqui para competir comigo mesma, 
                            ultrapassar meus limites, vencer meus medos e superar as dificuldades, e tudo isso já me ocupa bastante tempo. Aprendi 
                            que não posso controlar o tempo. Se a tempestade não passar, danço na chuva mesmo. Eu falo besteiras, me enrolo nas minhas 
                            próprias palavras, tropeço nas minhas pernas, rio de mim mesma e sorrio para as coisas mais simples da vida. E é isso que me faz feliz.</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Sobremim