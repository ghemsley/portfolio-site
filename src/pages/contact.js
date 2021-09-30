import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import EmailCard from '../components/EmailCard'

import Layout from '../components/Layout'

const Contact = () => {
  return (
    <>
      <GatsbySeo
        title='Contact'
        description='How to contact the author'
        openGraph={{
          title: 'Contact',
          description: 'How to contact the author',
          url: 'https://grahamhemsley.com/contact',
          images: [
            {
              url: `https://grahamhemsley.com/preview.jpg`,
              width: 1280,
              height: 800,
              alt: 'A development portfolio by Graham Hemsley'
            }
          ]
        }}
      />
      <Layout>
        <h1 className='page-header'>Contact</h1>
        <div className='blog-post-container'>
          <div className='blog-post'>
            <div className='blog-post-content'>
              <h2>Get in touch</h2>
              <p>
                To get in touch with the author, please feel free to send an
                email, or you can also reach out using one of the social media
                options on the dark blue menubar.
              </p>
              <h2>Email</h2>
              <EmailCard />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
