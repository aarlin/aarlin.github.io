import React from 'react'
import { graphql } from 'gatsby'
import { Header } from 'semantic-ui-react'
import IndexLayout from '../layouts'

export const projects = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/projects" } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

const Projects = ({ data }) => (
  <IndexLayout>
    <Header>{data.markdownRemark.frontmatter.title}</Header>
    {data.markdownRemark.html}
  </IndexLayout>
)

export default Projects
