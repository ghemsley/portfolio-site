import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = ({ data }) => {
  return (
    <div className='project-grid'>
      {data.allMdx.edges.map(node => {
        return (
          <ProjectCard
            key={node.node.id}
            name={node.node.frontmatter.name}
            slug={node.node.frontmatter.slug}
            languages={node.node.frontmatter.languages}
            image={node.node.frontmatter.image.childImageSharp.gatsbyImageData}
            date={node.node.frontmatter.date}
            excerpt={node.node.frontmatter.summary}
          />
        )
      })}
    </div>
  )
}

export default ProjectsList
