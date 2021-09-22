import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { HiOutlineTag } from 'react-icons/hi'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/Layout'
export default function Project({ location, data }) {
  return (
    <>
      <GatsbySeo
        title={data.mdx.frontmatter.name}
        description={data.mdx.excerpt}
        openGraph={{
          type: 'article',
          title: data.mdx.frontmatter.name,
          description: data.mdx.excerpt,
          url: `https://www.grahamhemsley.com${data.mdx.frontmatter.slug}`,
          article: {
            publishedTime: data.mdx.frontmatter.date,
            authors: [`https://www.grahamhemsley.com/author`],
            tags: [...data.mdx.frontmatter.languages]
          },
          images: [
            {
              url: `https://www.grahamhemsley.com${data.mdx.frontmatter.image.childImageSharp.gatsbyImageData.src}`,
              width: 960,
              height: 640,
              alt: data.mdx.frontmatter.name
            }
          ]
        }}
      />
      <Layout>
        <div className='blog-post-container'>
          <h1 className='page-header' id='page-header'>
            {data.mdx.frontmatter.name}
          </h1>
          <div className='blog-post'>
            <div className='post-metadata'>
              <time className='blog-post-meta-date'>
                {data.mdx.frontmatter.date}
              </time>
              <div className='project-tag-container'>
                {data.mdx.frontmatter.languages.map((language, i) => {
                  return (
                    <div className='project-tag-link' key={i}>
                      <HiOutlineTag size='24' />
                      {language}
                    </div>
                  )
                })}
              </div>
            </div>
            <GatsbyImage
              className='blog-post-image'
              image={data.mdx.frontmatter.image.childImageSharp.gatsbyImageData}
              title='Project image'
              alt='Project image'
            />
            <div className='blog-post-content'>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query ProjectQuery($slug: String!) {
    allMdx(
      filter: { frontmatter: { slug: { regex: "/^/projects//i" } } }
      sort: { order: DESC, fields: frontmatter___name }
    ) {
      edges {
        node {
          frontmatter {
            slug
            name
          }
        }
        next {
          frontmatter {
            slug
            name
          }
        }
        previous {
          frontmatter {
            slug
            name
          }
        }
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM YYYY")
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              width: 1200
            )
          }
        }
        slug
        languages
        name
      }
      body
      excerpt
    }
  }
`
