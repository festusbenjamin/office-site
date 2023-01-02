import "./form.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from "react";

const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_imdwxjd', 'template_031opjd', form.current, 'a44VY0bul68XOhtCa')
      .then((result) => {
        toast.success('Thankyou for contacting us!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          e.target.reset();
      }, (error) => {
        toast.error(error.text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      });
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail} method="POST" >
        <label> Name </label> 
        <input type="text" name="from_name" required />
        <label> Phone </label> 
        <input type="number" name="phone" required />
        <label> Email </label> 
        <input type="email" name="email" required />
        <label> Subject </label> 
        <input type="text" name="subject" required />
        <label> Message </label>
        <textarea rows="6" placeholder="Type Your Message Here" name="message" required />
        <button className="btn-form">Submit</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
