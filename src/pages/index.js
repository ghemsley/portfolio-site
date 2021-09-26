import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectsList from '../components/projectsList'



const Index = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/^.+/projects/i" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 280)
            frontmatter {
              name
              slug
              summary
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
                    width: 800
                  )
                }
              }
              languages
              date(formatString: "MMMM YYYY")
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <GatsbySeo
        language='en'
        title='Portfolio'
        description={`A development portfolio by Graham Hemsley`}
        openGraph={{
          type: 'website',
          title: 'Portfolio',
          locale: 'en_US',
          site_name: 'Portfolio',
          url: 'https://www.grahamhemsley.com/',
          description: 'A development portfolio by Graham Hemsley',
          images: [
            {
              url: 'https://www.grahamhemsley.com/preview.jpg',
              width: 1280,
              height: 720,
              alt: 'Preview of a development portfolio by Graham Hemsley'
            }
          ]
        }}
      />
      <Layout>
        <h1 className='page-header'>Projects</h1>
        <ProjectsList data={data}/>
      </Layout>
    </>
  )
}

export default Index
