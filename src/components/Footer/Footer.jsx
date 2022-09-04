import React from 'react'
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaTiktok } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footer bg-dark section-p' id='footer'>
            <div className='container'>
                <div className='section-title'>
                    <h3 className='text-brown'>Follow<span className='text-white'>Me</span></h3>
                </div>
                <div className='footer-content'>
                    <ul className='footer-social-links flex flex-c'>
                        <li>
                            <a href="/" className='text-white'>
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-white'>
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-white'>
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-white'>
                                <FaPinterest />
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-white'>
                                <FaTiktok />
                            </a>
                        </li>
                    </ul>
                    <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>Todos os Direitos Reservados &copy; 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Footer