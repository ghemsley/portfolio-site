import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import { HiOutlineTag } from 'react-icons/hi'
import Layout from '../components/Layout'
import PostNavigator from '../components/postNavigator'
export default function Post({ location, data }) {
  return (
    <>
      <GatsbySeo
        title={data.mdx.frontmatter.title}
        description={data.mdx.excerpt}
        openGraph={{
          type: 'article',
          title: data.mdx.frontmatter.title,
          description: data.mdx.frontmatter.excerpt,
          url: `https://www.grahamhemsley.com${data.mdx.frontmatter.slug}`,
          article: {
            publishedTime: data.mdx.frontmatter.date,
            authors: [`https://www.grahamhemsley.com/author`],
            tags: [
              ...data.mdx.frontmatter.tags.map(tag => {
                return tag.name
              })
            ]
          },
          images: [
            {
              url: `https://www.grahamhemsley.com${data.mdx.frontmatter.image.childImageSharp.gatsbyImageData.src}`,
              width: 1280,
              height: 720,
              alt: data.mdx.frontmatter.title
            }
          ]
        }}
      />
      <Layout>
        <div className='blog-post-container'>
          <h1 className='page-header' id='page-header'>
            {data.mdx.frontmatter.title}
          </h1>
          <div className='blog-post'>
            <div className='post-metadata'>
              <p className='blog-post-meta-date'>
                Published{' '}
                <time>{data.mdx.frontmatter.date}</time>
              </p>

              <div className='blog-post-tags-container'>
                {data.mdx.frontmatter.tags.map(tag => {
                  return (
                    <Link
                      to={`/tags/${tag.name}`.toLowerCase()}
                      key={tag.name}
                      title={tag.name}>
                      <div className='tag-link'>
                        <HiOutlineTag size='24' />
                        {tag.name}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
            <p className='blog-post-time-to-read'>{`This post should take around ${data.mdx.timeToRead} minutes to read`}</p>
            <GatsbyImage
              className='blog-post-image'
              image={data.mdx.frontmatter.image.childImageSharp.gatsbyImageData}
              title='Cover image'
              alt='Cover image'
            />
            <div className='blog-post-content'>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
              <PostNavigator data={data} location={location} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/^.+/posts/i" } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
        next {
          frontmatter {
            slug
            title
          }
        }
        previous {
          frontmatter {
            slug
            title
          }
        }
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
        slug
        tags {
          name
        }
        title
      }
      timeToRead
      body
      excerpt
    }
  }
`
