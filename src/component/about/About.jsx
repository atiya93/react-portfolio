
import React from 'react'
import './About.css'
import ME from '../../assest/me.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt=''/>
          </div>
        </div>
       <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
            <FiAward className='about__icon'/>
            <h5>Certification</h5>
            <small></small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small></small>
          </article>
          <article className='about__card'>
            <AiOutlineFolder className='about__icon'/>
            <h5>Experience</h5>
            <small></small>
          </article>
          
        </div>
        <p>Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Cloud Computing, DevSecops, and Web Development. Now I am looking for more experience in my field.</p>
      </div>
    </div>
    </section>
  )
}

export default About
    