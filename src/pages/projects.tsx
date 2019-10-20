import React from 'react'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'

export const projects = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/projects" } }) {
      html
      frontmatter {
        date
      }
    }
  }
`

const ProjectsPage = ({ data }) => (
  <IndexLayout>
    <div> Date Posted: {data.markdownRemark.frontmatter.date}</div>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </IndexLayout>
)

export default ProjectsPage
