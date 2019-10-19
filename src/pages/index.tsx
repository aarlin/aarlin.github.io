import * as React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'

export const about = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <IndexLayout>
    <Header>{data.markdownRemark.title}</Header>
    {data.markdownRemark.html}
  </IndexLayout>
)

export default IndexPage
