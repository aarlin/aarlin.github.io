import React from 'react'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'

export const projects = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
    }
  }
`

const ProjectsPage = ({ data }) => (
  <IndexLayout>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </IndexLayout>
)

export default ProjectsPage
