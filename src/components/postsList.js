import React from 'react'
import PostsListItem from './PostsListItem'

const PostsList = ({ location, data }) => {
  if (location.pathname === '/blog') {
    return (
      <div className='post-container'>
        {data.allMdx.edges.map((node, i) => {
          if (node.node.frontmatter.featured) {
            return (
              <React.Fragment key={i}>
                <h1 className='page-header' key='pinned'>
                  Featured post
                </h1>
                <PostsListItem post={node.node} key={node.node.id} />
              </React.Fragment>
            )
          } else return null
        })}
        <h1 className='page-header'>Latest posts</h1>
        {data.allMdx.edges.map((node, i) => {
          if (!node.node.frontmatter.featured) {
            return <PostsListItem post={node.node} key={node.node.id} />
          } else return null
        })}
      </div>
    )
  } else {
    return (
      <div className='post-container'>
        {data.allMdx.edges.map((node, i) => {
          return <PostsListItem post={node.node} key={node.node.id} />
        })}
      </div>
    )
  }
}

export default PostsList
