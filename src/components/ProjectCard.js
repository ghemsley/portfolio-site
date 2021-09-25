import React from 'react'
import { Link } from 'gatsby'
import { HiCode } from 'react-icons/hi'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectCard = ({ name, slug, languages, date, image, excerpt }) => {
  return (
    <div className='project'>
      <h2 className='project-title'>
        <Link to={`${slug.toLowerCase()}`} title={name}>
          {name}{' '}
        </Link>
      </h2>
      <div className='project-tag-container'>
        {languages &&
          languages.map((language, i) => {
            return (
              <div className='project-tag-link' key={i}>
                <HiCode size='20' />
                {language}
              </div>
            )
          })}
      </div>
      {/* <p className='project-date'>Created {date}</p> */}
      {image && (
        <Link to={`${slug.toLowerCase()}`}>
          <GatsbyImage
            className='project-image'
            image={image}
            title='Project image'
            alt='Project image'
          />
        </Link>
      )}
      <p className='project-preview'>{excerpt}</p>
      <Link
        to={`${slug.toLowerCase()}`}
        title={name}
        className='project-read-more'>
        Details
      </Link>
    </div>
  )
}

export default ProjectCard
