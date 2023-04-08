import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>atiya93hassan@gmail.com</h5>
            <a href='#'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            {/* <h5>Atiya Hassan</h5> */}
            <a href='#'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            {/* <h5>atiya93hassan@gmail.com</h5> */}
            <a href='#'>Send a Message</a>
          </article>

        </div>
        {/* end of option */}
        <form action=''>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your message'></textarea>
          <button type='submit' className="cont_btn">Send Mesaage</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
