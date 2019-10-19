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

const Blog = ({ data }) => (
  <IndexLayout>
    {data.allMarkdownRemark.edges.map(blogPost => {
      return (
        <>
          <Segment padded vertical basic>
            <Header as="h4">{blogPost.node.frontmatter.title}</Header>
            Time to read: {blogPost.node.timeToRead} minute(s)
          </Segment>
          <Button compact as={Link} to={blogPost.node.fields.slug}>
            Read more
          </Button>
          <Divider section />
        </>
      )
    })}
  </IndexLayout>
)

export default Blog
