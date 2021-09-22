import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const Nav = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "pages" }, name: { ne: "index" } }
      ) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  return (
    <>
      <nav className='nav'>
        <ul>
          <li key='home'>
            <Link className='nav-button' to='/' title='Home'>
              Home
            </Link>
          </li>
          {data.allFile.edges.map((page, i) => {
            return (
              page.node.name !== '404' && (
                <li key={i}>
                  <Link
                    to={`/${page.node.name}`}
                    className='nav-button'
                    title={
                      page.node.name.charAt(0).toUpperCase() +
                      page.node.name.slice(1)
                    }>
                    {page.node.name}
                  </Link>
                </li>
              )
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
