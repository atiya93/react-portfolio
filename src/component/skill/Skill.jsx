import React from 'react'
import './skill.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'
const skill = () => {
  return (
    <section id="skill">
      <h5>What Skill I have</h5>
      <h2>My skill</h2>

      <div className='contaioner skill__container'>
        <div className='skill__frontend'>
          <h3>Frontend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons' />
              <h4>HTML</h4>
              <small className='text-light'>skill</small>
            </article>
            <article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons'/>
              <h4>CSS</h4>
              {/* <small className='text-light'>skill</small> */}
            </article><article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons'/>
              <h4>Bootstrap</h4>
              {/* <small className='text-light'>skill</small> */}
            </article><article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons'/>
              <h4>JavaScript</h4>
              {/* <small className='text-light'>skill</small> */}
            </article><article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons'/>
              <h4>React</h4>
              {/* <small className='text-light'>skill</small> */}
            </article>
          </div>
        </div>
        <div className='skill__backend'>
        <h3>Backend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons'/>
              <h4>PHP</h4>
              {/* <small className='text-light'>skill</small> */}
            </article>
            <article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons'/>
              <h4>Node JS</h4>
              {/* <small className='text-light'>skill</small> */}
            </article>
            <article className='skill__details'>
              <BsFillCheckSquareFill className='skill__details_icons'/>
              <h4>SQL</h4>
              {/* <small className='text-light'>skill</small> */}
            </article>
                        
          </div>
        </div>
      </div>
    </section>
  )
}

export default skill
