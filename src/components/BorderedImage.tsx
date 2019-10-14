import React from 'react'
import { Image } from 'semantic-ui-react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

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
      {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
      <Image className={className} src={data.file.publicURL} size="medium" bordered />
    </>
  )
}

export default BorderedImage
