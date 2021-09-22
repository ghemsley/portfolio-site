import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '../components/Layout'
import { Link } from 'gatsby'

const About = props => {
  return (
    <>
      <GatsbySeo
        title='About'
        description='About this site'
        openGraph={{
          title: 'About',
          description: 'About this site',
          url: 'https://www.grahamhemsley.com/about',
          images: [
            {
              url: `https://www.grahamhemsley.com/preview.jpg`,
              width: 1280,
              height: 720,
              alt: 'A blog by Graham Hemsley'
            }
          ]
        }}
      />
      <Layout>
        <h1 className='page-header'>About</h1>
        <div className='blog-post-container'>
          <div className='blog-post-content'>
            <p>
              This blog is a student project intended to showcase things the
              author has been learning and doing during their time attending{' '}
              <a
                href='https://flatironschool.com/'
                rel='noopener noreferrer'
                target='_blank'>
                Flatiron School
              </a>
              , a software engineering bootcamp with locations spanning the
              United States.
              <h2>Tech</h2>
              This blog was built using a bunch of cool technologies, including:
              <br />
              <br />
              <a
                href='https://nodejs.org/'
                rel='noopener noreferrer'
                target='_blank'>
                NodeJS
              </a>
              ,<br />
              <a
                href='https://reactjs.org/'
                rel='noopener noreferrer'
                target='_blank'>
                React
              </a>
              ,<br />
              <a
                href='https://gatsbyjs.com/'
                rel='noopener noreferrer'
                target='_blank'>
                Gatsby
              </a>
              ,<br />
              <a
                href='https://mdxjs.com/'
                rel='noopener noreferrer'
                target='_blank'>
                MDX
              </a>
              ,<br />
              <a
                href='https://graphql.org/'
                rel='noopener noreferrer'
                target='_blank'>
                GraphQL
              </a>
              ,<br />
              <a
                href='https://github.com/oxalorg/sakura'
                rel='noopener noreferrer'
                target='_blank'>
                SakuraCSS
              </a>
              ,<br />
              <a
                href='https://sass-lang.com'
                rel='noopener noreferrer'
                target='_blank'>
                Sass
              </a>
              ,<br />
              and{' '}
              <a
                href='https://www.netlify.com/'
                rel='noopener noreferrer'
                target='_blank'>
                Netlify
              </a>
              .
              <br />
              <br />
              The author is sharing stories and information with the hopes that
              someone will find it useful or interesting. If you have feedback
              for the author, please don't hesitate to{' '}
              <Link to='/contact'>reach out</Link>.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
