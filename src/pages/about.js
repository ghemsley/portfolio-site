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
          url: 'https://grahamhemsley.com/about',
          images: [
            {
              url: `https://grahamhemsley.com/preview.jpg`,
              width: 1280,
              height: 800,
              alt: 'A portfolio by Graham Hemsley'
            }
          ]
        }}
      />
      <Layout>
        <h1 className='page-header'>About</h1>
        <div className='blog-post-container'>
          <div className='blog-post'>
            <div className='blog-post-content'>
              <p>
                This site is a portfolio intended to showcase projects the
                author has built during their time as a software engineer. There
                is also a <Link to='/blog'>blog</Link> feature and{' '}
                <Link to='/author'>a little section about the author</Link> if
                you want to know more.
                <h2>Tech</h2>
                This blog was built using a bunch of cool technologies,
                including:
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
                and{' '}
                <a
                  href='https://sass-lang.com'
                  rel='noopener noreferrer'
                  target='_blank'>
                  Sass
                </a>
                .
                <br />
                <br />
                The author is sharing stories and information with the hopes
                that someone will find it useful or interesting. If you have
                feedback for the author, please don't hesitate to{' '}
                <Link to='/contact'>reach out</Link>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
