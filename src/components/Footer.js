import React from 'react';
import { BiMailSend, BiMap, BiPhone } from 'react-icons/bi';
import './footer.css'; 

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <BiMap size={30} style={{color:'red', marginRight:'1.5rem'}} />
                    <div>
                        <p>Dar-es-Salaam, Tanzania</p>
                    </div>
                </div>
                <div className='phone'>
                    <BiPhone size={30} style={{color:'green', marginRight:'1.5rem'}} />
                    <div>
                        <p>+255763104775</p>
                    </div>
                </div>
                <div className='email'>
                    <BiMailSend size={30} style={{color:'brown', marginRight:'1.5rem'}} />
                    <div>
                        <p>festusbenjamin02@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>A Team</h4>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer