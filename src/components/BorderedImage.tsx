import React from 'react'
import { Image, Card, Icon } from 'semantic-ui-react'
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
      <Card>
        <Image className={className} src={data.file.publicURL} size="medium" rounded bordered wrapped ui={false} />
        <Card.Content>
          <Card.Header>Aaron Lin</Card.Header>
          <Card.Meta>
            <span className="job-title">Associate Software Engineer @ Fidelity</span>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}

export default BorderedImage
