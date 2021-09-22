import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = ({ location, data }) => {
  return (
    <div className='project-grid'>
      {data.allMdx.edges.map(node => {
        console.log(node)
        return (
          <ProjectCard
            key={node.node.id}
            name={node.node.frontmatter.name}
            slug={node.node.frontmatter.slug}
            languages={node.node.frontmatter.languages}
            image={node.node.frontmatter.image.childImageSharp.gatsbyImageData}
            date={node.node.frontmatter.date}
            excerpt={node.node.excerpt}
          />
        )
      })}
    </div>
  )
}

export default ProjectsList
