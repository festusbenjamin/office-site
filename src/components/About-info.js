import React from 'react'
import { NavLink } from 'react-router-dom';
import '../components/about-info.css';

const Aboutinfo = () => {
  return (
    <div className="about-info">
        <div className="about-container-info">
          <div className="about-right-info">
            <h5>INNOVATION</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <NavLink to="" className="btn-info">
              MORE INFO
            </NavLink>
          </div>
        </div>
      </div>
  )
}

export default Aboutinfo