import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gather and evaluate user requirements in collaboration with product managers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Illustrate design ideas using storyboards, process flows and sitemaps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify and troubleshoot UX problems (e.g. responsiveness)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adhere to style standards on fonts, colors and images</p>
            </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using markup languages like HTML to create user-friendly web/web-app pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintaining and improving website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design mobile-based features</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborate with back-end developers and web designers to improve usability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure high quality graphic standards and brand consistency</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Updating your Website Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Willingness to take direction but also to find creative ways to improve on that direction – initiative</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create, develop, produce and execute your own content at pace, keeping up with a fast- moving production work stream</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create engaging content</p>
            </li>
          </ul>
        </article>
      </div>
    </section >
  )
}

export default Services