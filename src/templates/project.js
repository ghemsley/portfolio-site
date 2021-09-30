import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import { HiOutlineTag } from 'react-icons/hi'
import Layout from '../components/Layout'
export default function Project({ data }) {
  return (
    <>
      <GatsbySeo
        title={data.mdx.frontmatter.name}
        description={data.mdx.excerpt}
        openGraph={{
          type: 'article',
          title: data.mdx.frontmatter.name,
          description: data.mdx.excerpt,
          url: `https://grahamhemsley.com${data.mdx.frontmatter.slug}`,
          article: {
            publishedTime: data.mdx.frontmatter.date,
            authors: [`https://grahamhemsley.com/author`],
            tags: [...data.mdx.frontmatter.languages]
          },
          images: [
            {
              url: `https://grahamhemsley.com${data.mdx.frontmatter.image.childImageSharp.gatsbyImageData.src}`,
              width: 1280,
              height: 720,
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
              <p className='blog-post-meta-date'>
                Created <time>{data.mdx.frontmatter.date}</time>
              </p>
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
              placeholder: BLURRED
              width: 800
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
