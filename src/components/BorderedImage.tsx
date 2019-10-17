import React from 'react'
import { Image, Card, Icon, List } from 'semantic-ui-react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import SocialMediaButtons from './SocialMediaButtons'

interface BorderedImageProps {
  className?: string
}

// interface BorderedImageData {
//   file: {
//     childImageSharp: {
//       fixed:
//     }
//   }
// }

const BorderedImage: React.SFC<BorderedImageProps> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "self.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
        publicURL
      }
    }
  `)

  return (
    <>
      <Card centered>
        <Image className={className} src={data.file.publicURL} size="medium" rounded bordered wrapped ui={false} />
        <Card.Content>
          <Card.Header>Aaron Lin</Card.Header>
          <Card.Meta>
            <span className="job-title">Associate Software Engineer @ Fidelity</span>
          </Card.Meta>
          <Card.Description>
            <List>
              <List.Item>
                <List.Icon name="users" />
                <List.Content>Semantic UI</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>New York, NY</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:jack@semantic-ui.com">aaron@semantic-ui.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                </List.Content>
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}

export default BorderedImage
