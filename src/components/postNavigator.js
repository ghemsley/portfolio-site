import React, { Fragment } from 'react'
import { CgChevronLeftO } from 'react-icons/cg'
import { CgChevronRightO } from 'react-icons/cg'
import { Link } from 'gatsby'

const PostNavigator = ({ data, location }) => {
  return (
    <div className='post-navigator'>
      {data.allMdx.edges.map((edge, i) => {
        let string1 = edge.node.frontmatter.slug.replace(/\/$/gi, '')
        let string2 = location.pathname.replace(/\/$/gi, '')
        if (string1 === string2) {
          return (
            <Fragment key={i}>
              {edge.previous && (
                <Link
                  to={`${edge.previous.frontmatter.slug}`}
                  title={edge.previous.frontmatter.title}
                  className='post-navigator-previous tag-link'>
                  <div className='post-navigator-link-div'>
                    <CgChevronLeftO size={32} className='post-navigator-icon' />
                    <p>Previous post</p>
                  </div>
                </Link>
              )}
              {edge.next && (
                <Link
                  to={`${edge.next.frontmatter.slug}`}
                  title={edge.next.frontmatter.title}
                  className='post-navigator-next tag-link'>
                  <div className='post-navigator-link-div'>
                    <p>Next post</p>
                    <CgChevronRightO
                      size={32}
                      className='post-navigator-icon'
                    />
                  </div>
                </Link>
              )}
            </Fragment>
          )
        } else return null
      })}
    </div>
  )
}
export default PostNavigator
