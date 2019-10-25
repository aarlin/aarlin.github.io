import React from 'react'
import { Image, Card } from 'semantic-ui-react'
import { graphql, useStaticQuery } from 'gatsby'

interface BorderedImageProps {
  className?: string
}

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
        <Image className={className} src={data.file.publicURL} size="medium" rounded bordered wrapped />
        <Card.Content>
          <Card.Header>Aaron Lin</Card.Header>
          <Card.Meta>
            <span className="job-title">Associate Software Engineer @ Fidelity</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </>
  )
}

export default BorderedImage
