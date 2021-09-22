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
          url: 'https://www.grahamhemsley.com/contact',
          images: [
            {
              url: `https://www.grahamhemsley.com/preview.jpg`,
              width: 1280,
              height: 720,
              alt: 'A development portfolio by Graham Hemsley'
            }
          ]
        }}
      />
      <Layout>
        <h1 className='page-header'>Contact</h1>
        <p>
          To get in touch with the author, feel free to send an email, or reach out using one of the social media options on the sidebar.
        </p>
        <h2>Email</h2>
        <EmailCard />
      </Layout>
    </>
  )
}

export default Contact
