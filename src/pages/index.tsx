import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Segment, Divider, Header, Image, Label, Icon } from 'semantic-ui-react'
import IndexLayout from '../layouts'
import { associateColor } from '../utilities/randomColor'

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
      const { tags } = node.frontmatter
      return (
        <React.Fragment key={node.frontmatter.key}>
          <Segment basic compact>
            <Header as="h4">
              [{node.frontmatter.date}]: {node.frontmatter.title}
            </Header>
            <Image src={node.frontmatter.images.childImageSharp.fluid.src} size="small" rounded floated="left" />
            <p>{node.excerpt}</p>
            <p>
              {tags.map(tag => {
                return (
                  <Label basic color={associateColor(tag)}>
                    {tag}
                  </Label>
                )
              })}
            </p>
            <Button compact basic as={Link} to={node.fields.slug}>
              <b>Continue Reading</b>
              <Icon name="chevron right" />
            </Button>
          </Segment>
          <Divider section />
        </React.Fragment>
      )
    })}
  </IndexLayout>
)

export default BlogPage
