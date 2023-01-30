import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image : IMG1,
    title: 'Music player',
    github: 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id: 2,
    image : IMG2,
    title: 'Zero sum calculator',
    github: 'https://github.com/shrutisoni02/maxZeroSumCalculator.git',
    demo : 'https://github.com'
  },
  {
    id: 3,
    image : IMG3,
    title: 'Covid 19 tracker app',
    github: 'https://github.com/shrutisoni02/live_covid-19_tracker_app.git',
    demo : 'https://github.com'
  },
  {
    id: 4,
    image : IMG4,
    title: 'Shopping Cart',
    github: 'https://github.com/shrutisoni02/React-shopping-cart.git',
    demo : 'https://github.com'
  },
  {
    id: 5,
    image : IMG5,
    title: 'ToDoList',
    github: 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id: 6,
    image : IMG6,
    title: 'Ecommerce Website',
    github: 'https://github.com',
    demo : 'https://github.com'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
         {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-Image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
         }
        </div>
    </section>
  )
}

export default Portfolio;