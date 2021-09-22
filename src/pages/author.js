import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const Author = props => {
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
        <div className='blog-post'>
          <div className='blog-post-content'>
            <StaticImage
              className='author-image'
              src='../assets/images/pages/author/author.jpg'
              alt='Picture of Graham Hemsley'
              placeholder='tracedSVG'
              width={400}
            />
            <h2>Hello!</h2>
            <p>
              My name is Graham, and I'm an aspiring web developer currently
              taking classes to learn more about how to build cool stuff on the
              web. You've happened upon a blog I maintain so I can document my
              learning process, mainly for fun and the ability to look back on
              my growth. I hope you find something interesting while you're
              here!
              <br />
              If you want to know a little more about me, let's see, I like
              computers, cameras, coding, and coffee, in no particular order. I
              like practicing photography in my spare time, whenever I get the
              chance. When I finish with my studies, I hope to someday write
              software for a nonprofit agency that helps people out in some
              meaningful way.
              <br />
              I'd love to hear from anyone who lands on my blog about coding
              related stuff, or you can just let me know how the weather is
              where you live or something if you want. Really! I'd love to hear
              from you no matter what the topic. If you'd like to get in touch, check out{' '}
              <Link to='/contact'>the contact page</Link>.
            </p>
            <h3>Thanks for stopping by!</h3>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Author
