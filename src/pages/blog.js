import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '../components/Layout'
import PostsList from '../components/postsList'

const Blog = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/^.+/posts/i" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 280)
            timeToRead
            slug
            frontmatter {
              title
              author
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
                    width: 800
                  )
                }
              }
              slug
              tags {
                name
              }
              date(formatString: "MMMM D, YYYY")
              featured
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
        title='Blog'
        description={`A development blog by Graham Hemsley`}
        openGraph={{
          type: 'website',
          title: 'Blog',
          locale: 'en_US',
          site_name: 'Portfolio',
          url: 'https://grahamhemsley.com/blog',
          description: 'A development blog by Graham Hemsley',
          images: [
            {
              url: 'https://grahamhemsley.com/preview.jpg',
              width: 1280,
              height: 800,
              alt: 'Preview of a development portfolio by Graham Hemsley'
            }
          ]
        }}
      />
      <Layout>
        <PostsList location={location} data={data} />
      </Layout>
    </>
  )
}

export default Blog
