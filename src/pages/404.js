import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className='page-header'>About</h1>
      <div className='blog-post-container'>
        <div className='blog-post'>
          <div className='blog-post-content'>
            <h2>Page not found</h2>
            <p>
              Sorry{' '}
              <span role='img' aria-label='Pensive emoji'>
                😔
              </span>{' '}
              we couldn’t find what you were looking for.
              <br />
              {process.env.NODE_ENV === 'development' ? (
                <>
                  <br />
                  Try creating a page in <code>src/pages/</code>.
                  <br />
                </>
              ) : null}
              <br />
              <Link to='/'>Go home</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
