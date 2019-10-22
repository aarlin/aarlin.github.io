import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Segment, Divider, Header, Image } from 'semantic-ui-react'
import IndexLayout from '../layouts'

export const blogPosts = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { contentType: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            layout
            title
            key
            date
            tags
            path
            contentType
            images {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
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
          <Image src={node.frontmatter.images.childImageSharp.fluid.src} size="small" />
          <Segment basic compact>
            Tags: {node.tags}
          </Segment>
          <Segment basic compact>
            {node.excerpt}
          </Segment>
          <Button compact as={Link} to={node.fields.slug}>
            Continue Reading
          </Button>
          <Divider section />
        </React.Fragment>
      )
    })}
  </IndexLayout>
)

export default BlogPage
