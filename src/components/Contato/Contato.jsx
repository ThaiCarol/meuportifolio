import React, {useState} from 'react';
import "./Contato.css";

const Contato = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = (e) => {
        setFormData((prevData) =>({
            ...prevData, 
            [e.target.id] : e.target.value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);

    }
    return (
        <div className='contact section-p'>
            <div className='container'>
                <div className='contation-section'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Contate <span className='text-dark'>me</span></h3>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi harum assumenda natus quod velit.</p>
                    </div>
                </div>
                <form className='contact-form mx-auto' onSubmit={handleSubmit}>
                    <div className='form-elem'>
                        <input type="text" value={formData.name} className='form-control' placeholder='Nome' onChange={handleChange} id = "name"/>
                    </div>
                    <div>
                        <input type="text" value={formData.email} className='form-control' placeholder='Email' onChange={handleChange} id = "email"/>
                    </div>
                    <div className='form-elem'>
                        <textarea rows="5" value={formData.message} className= 'form-control' placeholder='Deixe aqui sua mensagem' onChange={handleChange} id = "message"></textarea>
                    </div>
                    <button type='submit' className='bg-brown text-white submit-btn fw-3 fs-22'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contato