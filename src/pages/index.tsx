import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Segment, Divider, Header } from 'semantic-ui-react'
import IndexLayout from '../layouts'

export const blogPosts = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { path: { regex: "/blog/" } } }) {
      edges {
        node {
          frontmatter {
            layout
            title
            key
            date
            tags
          }
          fields {
            slug
          }
          internal {
            description
          }
          excerpt(format: PLAIN)
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <IndexLayout>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return (
        <React.Fragment key={node.frontmatter.key}>
          <Segment padded vertical basic>
            <Header as="h4">
              [{node.frontmatter.date}]: {node.frontmatter.title}
            </Header>
          </Segment>
          <Segment basic compact>
            {node.excerpt}
          </Segment>
          <Button compact as={Link} to={node.fields.slug}>
            Read more
          </Button>
          <Divider section />
        </React.Fragment>
      )
    })}
  </IndexLayout>
)

export default BlogPage
