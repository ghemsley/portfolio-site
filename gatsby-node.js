const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const postTemplate = path.resolve('src/templates/post.js')
  const tagTemplate = path.resolve('src/templates/tag.js')
  const projectTemplate = path.resolve('src/templates/project.js')

  const postsResult = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/^.+/posts/i" } }) {
        tagsGroup: group(field: frontmatter___tags___name) {
          fieldValue
        }
        postsMdx: edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (postsResult.errors) {
    reporter.panicOnBuild(`Error while running posts GraphQL query.`)
    return
  }

  const projectsResult = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/^.+/projects/i" } }) {
        projectsMdx: edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (projectsResult.errors) {
    reporter.panicOnBuild(`Error while running projects GraphQL query.`)
    return
  }

  const posts = postsResult.data.allMdx.postsMdx
  console.log(posts)
  posts.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  const tags = postsResult.data.allMdx.tagsGroup
  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${tag.fieldValue.toLowerCase()}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      }
    })
  })

  const projects = projectsResult.data.allMdx.projectsMdx
  projects.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}
