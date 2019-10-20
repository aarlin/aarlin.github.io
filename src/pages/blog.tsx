import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Segment, Divider, Header } from 'semantic-ui-react'
import IndexLayout from '../layouts'

export const blogPosts = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          timeToRead
          frontmatter {
            layout
            title
            key
          }
          fields {
            slug
            layout
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <IndexLayout>
    {data.allMarkdownRemark.edges.map(blogPost => {
      return (
        <React.Fragment key={blogPost.node.frontmatter.key}>
          <Segment padded vertical basic>
            <Header as="h4">{blogPost.node.frontmatter.title}</Header>
            Time to read: {blogPost.node.timeToRead} minute(s)
          </Segment>
          <Button compact as={Link} to={blogPost.node.fields.slug}>
            Read more
          </Button>
          <Divider section />
        </React.Fragment>
      )
    })}
  </IndexLayout>
)

export default BlogPage
