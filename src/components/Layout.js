import React from 'react'
import { Link } from 'gatsby'

import Social from './Social'
import Nav from './Nav'
import '../sass/sakura.scss'
import '../sass/global.scss'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='sidebar'>
        <div className='header'>
          <h1 className='title'>
            <Link to='/' className='home-link' title='Home'>
              <p className='title-p'>Portfolio</p>
            </Link>
          </h1>
          <h2 className='subtitle'>
            <p className='subtitle-p'>
              projects by{' '}
              <Link to='/author' className='author' title='Author'>
                Graham Hemsley
              </Link>
            </p>
          </h2>
          <Social iconSize={48} />
          <Nav />
        </div>
      </div>
      <div className='content'>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
