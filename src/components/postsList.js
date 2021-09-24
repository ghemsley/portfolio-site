import React from 'react'
import PostsListItem from './PostsListItem'

const PostsList = ({ location, data }) => {
  if (location.pathname === '/blog') {
    return (
      <div className='post-container'>
        {data.allMdx.edges.map((edge, i) => {
          if (edge.node.frontmatter.featured) {
            return (
              <React.Fragment key={i}>
                <h1 className='page-header' key='pinned'>
                  Featured post
                </h1>
                <PostsListItem post={edge.node} key={edge.node.id} />
              </React.Fragment>
            )
          } else return null
        })}
        <h1 className='page-header'>Latest posts</h1>
        {data.allMdx.edges.map((edge, i) => {
          if (!edge.node.frontmatter.featured) {
            return <PostsListItem post={edge.node} key={edge.node.id} />
          } else return null
        })}
      </div>
    )
  } else {
    return (
      <div className='post-container'>
        {data.allMdx.edges.map((edge, i) => {
          return <PostsListItem post={edge.node} key={edge.node.id} />
        })}
      </div>
    )
  }
}

export default PostsList
