import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { HiOutlineTag } from 'react-icons/hi'
import { Link } from 'gatsby'

const PostsListItem = ({ post }) => {
  return (
    <div className='post' key={post.id}>
      <div className='post-metadata'>
        <div className='post-header'>
          <div>
            <div className='title-container'>
              <div className='title-container-nested'>
                <Link to={post.frontmatter.slug} title={post.frontmatter.title}>
                  <h2 className='post-title'>{post.frontmatter.title}</h2>
                </Link>
              </div>
              <div className='tag-container'>
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map((tag) => {
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
            <p className='date'>
              Published {post.frontmatter.date}
              {' by '}
              <Link to='/author' title='Author' className='author-link'>
                {post.frontmatter.author}
              </Link>
            </p>
          </div>
        </div>
      </div>
      {post.frontmatter.image && (
        <Link to={post.frontmatter.slug}>
          <GatsbyImage
            className='post-image'
            image={post.frontmatter.image.childImageSharp.gatsbyImageData}
            title='Cover image'
            alt='Cover image'
          />
        </Link>
      )}
      <div className='read-more-div'>
        <Link to={post.frontmatter.slug} title={post.frontmatter.title}>
          <p className='read-more'>Read post</p>
        </Link>
      </div>
      <div className='post-preview'>{post.excerpt}</div>
    </div>
  )
}

export default PostsListItem
