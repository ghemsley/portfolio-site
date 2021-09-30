import React from 'react'
import { graphql } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import PostsList from '../components/postsList'
import Layout from '../components/Layout'

export default function Tag({ location, pageContext, data }) {
  const { tag } = pageContext
  const { totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  return (
    <>
      <GatsbySeo
        title={tag}
        description={`Posts tagged with ${tag}`}
        openGraph={{
          title: tag,
          description: `Posts tagged with ${tag}`,
          url: `https://grahamhemsley.com${location.pathname}`,
          article: {
            authors: ['https://grahamhemsley.com/author'],
            tags: [tag]
          },
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
        <h1 className='page-header' id='page-header'>
          {tagHeader}
        </h1>
        <PostsList location={location} data={data} />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query TagQuery($tag: String!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        frontmatter: { tags: { elemMatch: { name: { eq: $tag } } } }
        fileAbsolutePath: { regex: "/^.+/posts/i" }
      }
    ) {
      edges {
        node {
          id
          slug
          timeToRead
          excerpt(pruneLength: 280)
          frontmatter {
            author
            date(formatString: "MMMM D, YYYY")
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 800
                )
              }
            }
            tags {
              name
            }
            title
            slug
          }
        }
      }
      totalCount
    }
  }
`
