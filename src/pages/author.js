import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const Author = () => {
  return (
    <>
      <GatsbySeo
        title='Author'
        description='About Graham Hemsley'
        openGraph={{
          title: 'Author',
          description: 'About Graham Hemsley',
          url: 'https://www.grahamhemsley.com/author',
          type: 'profile',
          profile: {
            firstName: 'Graham',
            lastName: 'Hemsley',
            username: 'ghemsley',
            gender: 'male'
          },
          images: [
            {
              url: 'https://www.grahamhemsley.com/author.jpg',
              width: 480,
              height: 480,
              alt: 'Photo of Graham Hemsley'
            }
          ]
        }}
      />
      <Layout>
        <h1 className='page-header'>Author</h1>
        <div className='blog-post-container'>
          <div className='blog-post'>
            <div className='blog-post-content'>
              <StaticImage
                className='author-image'
                src='../assets/images/pages/author/author.jpg'
                alt='Picture of Graham Hemsley'
                placeholder='blurred'
                width={400}
              />
              <h2>Hi there 👋</h2>
              <h3>You've found my porfolio! 🎉</h3>
              <p>
                I'm <strong>Graham Hemsley</strong>, and this is where I display
                the projects I am most proud of.
              </p>
              <p>
                I am a proud graduate of <strong>Flatiron School</strong> where
                I studied full-stack software engineering.
              </p>
              <p>My main proficiencies include:</p>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>ES6 Javascript</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>ActiveRecord</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>MVC architecture</li>
                <li>RESTful APIs</li>
                <li>Object-oriented programming</li>
                <li>Photography</li>
              </ul>
              <p>Fun facts about me:</p>
              <ul>
                <li>
                  My first computer ran MS-DOS and apparently came from a
                  junkyard
                </li>
                <li>
                  My first memory is of booting it up to play a drawing game
                </li>
                <li>My first attempt at coding was at age 7</li>
                <li>My first Ruby program ran when I was 15</li>
              </ul>
              <p>
                Please feel welcome to check out <Link to='/blog'>my blog</Link>{' '}
                or <Link to='/contact'>contact me</Link> if you'd like to know
                more about me or my work.
              </p>
              <h3>Thank you for stopping by! 🙂</h3>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Author
